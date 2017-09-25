import { Router ,Request ,Response ,NextFunction } from 'express';
export class Auth{

	constructor(req:Request, res:Response, next:NextFunction){
		console.log('Calling Auth');
		next();
	}
	
}