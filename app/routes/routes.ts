import {Response,Request} from 'express';
import {BaseRoute} from '../../vendor/';

export class Routes extends BaseRoute{
	
	constructor(public app:any){	
		super(app);
		this.run();
	}

	run(){

		this.view('/','index');
		this.post('/about','UserController@about');
		this.get('/dashboard','UserController@about');
	}
}