import * as express  from 'express';
import * as Routes from './app/routes';
class Server{

	// private app:express.Application = express();
	constructor(public port:number){
		this.run();
		console.log(Routes.Routes);
	}

	private routes(){

	}

	/*
		Run server
	*/
	private run(){
		// this.app.listen(this.port,()=>{
		// 	console.log('Server is running on port '+this.port);
		// });
		
	}
}


new Server(9000);