import * as express  from 'express';
import {Routes} from './app/routes';
class Server{

	private app:express.Application = express();
	constructor(public port:number){
		this.routes();
		this.run();		
	}

	/*
		Load all routes
	*/
	private routes(){			
		 new Routes(this.app);
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