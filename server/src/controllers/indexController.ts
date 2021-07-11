import { Request, Response } from 'express';

class IndexController{

    index (req:Request, res:Response) {
    
        res.send("Servidor proyecto");

    }
}

export const indexController = new IndexController();