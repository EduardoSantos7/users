import User from '../interfaces/user';
import {Genders} from "../enums/gender";
import {Gender} from "../enums/gender";
import mongoose from 'mongoose';
import crypto from "crypto"

const clientSchema = new mongoose.Schema({
	// email: {
	// 	type: String,
	// 	trim: true,
	// 	required: true,
	// 	unique: true,
	// 	lowercase: true,
	// },
	profile_name: {
		type: String,
		trim: true,
		required: true,
	},
	// hashed_password: {
	// 	type: String,
	// 	required: true,
	// },
	// age: Number,
	// weight: Number,
	// heigh: Number,
	// gender: {
	// 	type: String,
	// 	enum: Object.keys(Gender).map((k: any) => Genders.get(k))
	// },
}, { timestamps: true });

const ClientModel = mongoose.model<User & mongoose.Document>('Client', clientSchema);

export default ClientModel;
