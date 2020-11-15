import {Gender} from "enums/gender";

export default interface User {
    profile_name: string,
    _id?: string,
    status?: string,
    chats?: string[],
	profile_image?: string,

	age?: number,
	weight?: number,
	heigh?: number,
	gender?: Gender,
}