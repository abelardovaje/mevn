import * as Controllers from '../app/http/controllers';
	
export class Controller{

	constructor(public controllerName:any){
		
		let CTRL:any = Controllers;
		if(CTRL[controllerName]){
			return new CTRL[controllerName]();
		}							
	}
}