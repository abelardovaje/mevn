import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Middlewares from '../config/Middlewares';
import * as path from 'path';
import {Controller} from './Controller';
export class BaseRoute {

	public  Middlewares:any;
	constructor(public app:any){		
		this.Middlewares = Middlewares;
	}	

	get(url:string,controllerName:string,middlewareArray?:Array<string>){		
		var arry = controllerName.split('@');
		let method:any = new Controller(arry[0]);
		let middlewares:Array<any> = [];
		if(middlewareArray){
			if(middlewareArray.length > 0){
				for(var x in middlewareArray){
					let newMiddleware = this.Middlewares[middlewareArray[x]];						
					if(newMiddleware){
						middlewares.push(newMiddleware);
					}else{
						throw new Error(middlewareArray[x] +' Middleware is not defined');																		
					}						
				}			
			}	
		}
				
		if(method){
			if(!method[arry[1]]){
				throw new Error('Method ' + arry[1] + ' is not declared');					
			}			
			this.app.get(url,middlewares,method[arry[1]]);		
		}else{			
			throw new Error('Controller ' + arry[0] + ' is not created');		
		}
			
	}

	post(url:string,controllerName:string,middlewareArray?:Array<string>){		
		var arry = controllerName.split('@');
		let method:any = new Controller(arry[0]);
		let middlewares:Array<any> = [];
		if(middlewareArray){
			if(middlewareArray.length > 0){
				for(var x in middlewareArray){
					let newMiddleware = this.Middlewares[middlewareArray[x]];						
					if(newMiddleware){
						middlewares.push(newMiddleware);
					}else{
						throw new Error(middlewareArray[x] +' Middleware is not defined');																		
					}						
				}			
			}	
		}
				
		if(method){
			if(!method[arry[1]]){
				throw new Error('Method ' + arry[1] + ' is not declared');					
			}			
			this.app.post(url,middlewares,method[arry[1]]);		
		}else{			
			throw new Error('Controller ' + arry[0] + ' is not created');		
		}
			
	}

	view(url:string,viewName:string){
		this.app.get(url,function(req:Request,res:Response,next:NextFunction){
			
			res.sendFile(path.join(__dirname,'../../resources/views', viewName+'.html'),function(err:any){
				if(err){				
					console.log(err);
					res.status(err.status).end();
				}
			});
			
		});
	}	
	
}


