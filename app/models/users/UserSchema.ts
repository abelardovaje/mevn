import * as mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
	name:{
		type:String,
		require:true
	},
	username:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true,
		select:false
	}
});


export const UserSchema = mongoose.model('User',userSchema);