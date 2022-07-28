import { Request, Response } from "express";
import Usuario from '../models/usuario';

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

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;


    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if( existeEmail ){
            return res.status(400).json({
                msg: 'Ya existe un usuario con ese email'
            })
        }

        const usuario = await Usuario.create(body);
        // await usuario.save();

        res.json({
            msg: "Usuario creado con éxito",
            usuario
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error. Hable con el administrador"
        });
    }

    res.json({
        msg: 'postUsuarios',
        body
    })
}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk( id );
        if( !usuario ){
            return res.status(404).json({
                msg: 'No existe usuario con ese email'
            });
        }


        await usuario.update(body);

        res.json( usuario );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error. Hable con el administrador"
        });
    }

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

