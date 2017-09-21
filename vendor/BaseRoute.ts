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
}


