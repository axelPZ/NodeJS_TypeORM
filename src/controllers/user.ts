
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user";
import  bcryptjs  from "bcryptjs";


const axios = require('axios');


 export const getAll = async( req: Request, res: Response) => {

     const users = await getRepository( User ).find();
    return res.status(201).json({
            'users': users
        });
    }

export const addUser = async( req: Request, res: Response )=> {

    const {id, password, ...body } = req.body;

    const salt =  bcryptjs.genSaltSync(10);
    body.password = bcryptjs.hashSync( password, salt );

        getRepository( User ).create( body );
        const results = await getRepository( User ).save( body );

        return res.status(200).json({
            'message': 'No se pudo ingresar el usuario'
        });
}
