import { Router ,Request ,Response ,NextFunction } from 'express';
import * as express  from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as expressSession from 'express-session';
import * as methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

export class Middlewares{

	constructor(private app:any){}

	run(){

		/*
			Put all your middlewares here
		*/
		let app = this.app;

		app.use(cookieParser());
		app.use(csurf({cookie:true}));
		
		app.use(helmet());
		
		app.use( bodyParser.json() ); 
		
		app.use(bodyParser.urlencoded({extended:true}));
		
		app.use(methodOverride('X-HTTP-Method-Override'));
		
		app.use(expressSession({
			secret:'secret',
			resave:false,
			saveUninitialized:true
		}));

		
		app.use(function(req:Request, res:Response, next:NextFunction) {			
		    res.cookie('XSRF-TOKEN',req.csrfToken());
		    next();
		});

		app.use('/ajax',function(){
			console.log('Must be on ajax request only');
		})

	}

}