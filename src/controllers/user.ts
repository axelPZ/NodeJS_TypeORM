
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user";


const axios = require('axios');


 export const getAll = async( req: Request, res: Response) => {

     const users = await getRepository( User ).find();
    return res.status(200).json({
            'users': users
        });
    }