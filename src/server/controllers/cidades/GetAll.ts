import * as yup from 'yup'
import { Request, Response } from "express";
import { validation } from '../../shared/middleware';

interface IQueryProps{
    filter?: string
    page?: number
    limit?: number
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        limit: yup.number().optional().moreThan(0),
        page: yup.number().optional().moreThan(0),
        filter: yup.string().optional().min(3),
    })),
}))

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log(req.query)
    return res.status(500).send("Não implementado");
}