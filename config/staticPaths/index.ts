import * as express  from 'express';
import * as path from 'path';
export class StaticPaths{
	constructor(public app:any){		
		this.run();
	}

	run(){

		/*
			Pull all your static paths here
		*/

		this.app.use("/public", express.static(path.join(__dirname, '../../../public')));
		this.app.use("/node_modules", express.static(path.join(__dirname, '../../../node_modules')));

	}

}