import * as yup from 'yup'
import { Request, Response } from "express";
import { validation } from '../../shared/middleware';

interface IParamsProps{
    id?: number
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0),
    })),
}))

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
    console.log(req.params)
    return res.status(500).send("Não implementado");
}