import * as yup from 'yup'
import { Request, Response } from "express";
import { validation } from '../../shared/middleware';

interface IParamsProps{
    id?: number
}
interface IBodyProps{
    nome: string
}

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0),
    })),
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}))

export const updateById = async (req: Request<IParamsProps>, res: Response) => {
    console.log(req.params)
    console.log(req.body)
    return res.status(500).send("Não implementado");
}