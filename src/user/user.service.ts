import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {  User, UserDocument } from './user.schema';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  async create(userDoc: CreateUserDto): Promise<User> {
    const createUser = new this.userModal(userDoc);
    return createUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModal.find().select("name email role").lean().exec();
  }
  
  async findById(id: Types.ObjectId): Promise<User | null> {
    const user = await this.userModal.findById(id).select("name email role").lean().exec();
    return user;
  }
  
  async delete(name:string) {
    const resp = await this.userModal.findOneAndDelete({name});
    return  `User (${resp?.email}) deleted successfully.`
  }
}
