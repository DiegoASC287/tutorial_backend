import { RequestHandler } from "express";
import {AnyObject, Maybe, ObjectSchema, ValidationError} from 'yup'

type TProperty = 'body' | 'header' | 'params' | 'query'
type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>
type TAllSchemas = Record<TProperty, ObjectSchema<any>> 
type Tvalidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: Tvalidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema)
    const errorsResult: Record<string, Record<string, string>> = {}
    Object.entries(schemas).forEach(([key, schema]) => {
        try{
            schema.validateSync(req[key as TProperty], {abortEarly: false})
        }catch (error){
            const errors: Record<string, string> = {}
            const yupError = error as ValidationError;
            yupError.inner.forEach(error => {
                if(error.path === undefined) return;
                errors[error.path] = error.message
            })
            errorsResult[key] = errors  
        }
    })
    if (Object.entries(errorsResult).length === 0){
        return next();
    }else {
        return res.status(400).json({errors: errorsResult})
    }
    
};
