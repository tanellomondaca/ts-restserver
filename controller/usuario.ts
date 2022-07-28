import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();
    
    res.json({
        usuarios
    })
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const usuario = await Usuario.findByPk(id);

    if( !usuario ){
        res.status(404).json({
            msg: `No existe usuario con id ${id}`
        })
    }


    res.json({
        msg: 'getUsuario',
        usuario
    })
}

export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'postUsuarios',
        body
    })
}

export const putUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUsuarios',
        body,
        id
    })
}

export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUsuarios',
        id
    })
}

