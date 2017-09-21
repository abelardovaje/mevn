import { Router ,Request ,Response ,NextFunction } from 'express';
export class UserController{

	constructor(){}

	index(req:Request,res:Response){
		res.send(true);
	}

	about(req:Request,res:Response){
		res.send(true);
	}
}