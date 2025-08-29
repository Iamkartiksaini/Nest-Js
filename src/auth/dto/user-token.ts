import { Types } from "mongoose";

export class UserToken{
_id:Types.ObjectId;

name:string;

password?:string;

email:string

}