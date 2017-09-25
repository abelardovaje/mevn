import * as mongoose from 'mongoose';

export class Database{
	constructor(private Host:string,private Name:String){
		var db = mongoose.connection;
	    db.on('error', console.error);
	    db.once('open', function() {
	        console.log('connected to db');
	    });
	    (<any>mongoose).Promise = global.Promise;
	    mongoose.connect('mongodb://'+Host+'/'+Name);
	}
}