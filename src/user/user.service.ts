import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {  User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  async create(userDoc: CreateUserDto): Promise<User> {
    const createUser = new this.userModal(userDoc);
    return await createUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModal.find().select("name email role").lean().exec();
  }
  
  async findById(id: Types.ObjectId) {
    const user = await this.userModal.findById(id).select("name email role").lean().exec();
    return user;
  }
    
  async updateUser(id: Types.ObjectId,body:UpdateUserDto) {
    const user = await this.userModal.findByIdAndUpdate(id,{$set:body},{new:true}).select("name email").lean().exec();
    if(!user)    throw new NotFoundException('User not found');
    return user;
  }
  

  async delete(name:string) {
    const resp = await this.userModal.findOneAndDelete({name});
    return  `User (${resp?.email}) deleted successfully.`
  }
}
