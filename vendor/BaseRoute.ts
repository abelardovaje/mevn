import { Router ,Request ,Response ,NextFunction } from 'express';
import * as path from 'path';
import {Controller} from './Controller';
export class BaseRoute {

	constructor(public app:any){}	

	get(url:string,controllerName:string){
		var arry = controllerName.split('@');
		let method:any = new Controller(arry[0]);		
		if(method){
			if(!method[arry[1]]){
				throw new Error('Method ' + arry[1] + ' is not declared');					
			}			
			this.app.get(url,method[arry[1]]);		
		}else{			
			throw new Error('Controller ' + arry[0] + ' is not created');		
		}
			
	}

	post(url:string,controllerName:string){
		var arry = controllerName.split('@');
		let method:any = new Controller(arry[0]);		
		if(method){
			if(!method[arry[1]]){
				throw new Error('Method ' + arry[1] + ' is not declared');					
			}			
			this.app.post(url,method[arry[1]]);		
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


