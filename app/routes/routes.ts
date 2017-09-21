import {Response,Request} from 'express';
import {BaseRoute} from '../../vendor/';

export class Routes extends BaseRoute{
	
	constructor(public app:any){	
		super(app);
		this.run();
	}

	run(){

		this.get('/home','UserController@index');
		this.get('/about','UserController@about');
		
	}
}