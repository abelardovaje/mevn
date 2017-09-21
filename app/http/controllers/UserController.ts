import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Model from '../../models';
export class UserController{

	constructor(){}

	public index(req:Request,res:Response){
		
		res.send(true);
	}

	public about(req:Request,res:Response){
		res.send(true);
	}
}