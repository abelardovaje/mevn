import * as express  from 'express';
import {Routes} from './app/routes';
import {Database} from './config/database';
import {Middlewares} from './config/Middlewares';
import {StaticPaths} from './config/StaticPaths';
class Server{

	private app:express.Application = express();
	constructor(public port:number){
		this.staticPaths();
		this.middlewares();
		this.routes();
		this.db();
		this.run();		
	}

	/*
		Load all routes
	*/
	private routes(){			
		 new Routes(this.app);
	}

	/*
		Connect to database
	*/

	private db(){
		new Database();
	}

	/*
		Load all middlewares
	*/
	private middlewares(){
		new Middlewares(this.app).run();
	}

	/*
		Load all static paths
	*/
	private staticPaths(){
		new StaticPaths(this.app);
	}

	/*
		Run server
	*/
	private run(){
		this.app.listen(this.port,()=>{
			console.log('Server is running on port '+this.port);
		});
		
	}
}


new Server(9000);