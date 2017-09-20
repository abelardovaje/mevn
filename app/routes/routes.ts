import {Response,Request} from 'express';
export class Routes {

	constructor(public app:any){		
		this.run();
	}

	run(){
		this.app.get('/home',function(req:Request,res:Response){
			res.send(true);
		});
	}
}