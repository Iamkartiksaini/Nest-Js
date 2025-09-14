import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserResDto } from './dto/update-user.dto';
import { plainToInstance, TransformInstanceToPlain } from 'class-transformer';

const USER_KEYS = 'name email role password';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) readonly userModal: Model<UserDocument>,
  ) { }

  async create(user_doc_body: CreateUserDto): Promise<User> {
    const createUser = new this.userModal(user_doc_body);
    console.log(user_doc_body);
    return await createUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModal.find().lean().exec();
  }

  async findById(id: Types.ObjectId) {
    const user = await this.userModal
      .findById(id)
      .select(USER_KEYS)
      .lean()
      .exec();
    return user;
  }

  async findByEmail({ email, password }) {
    const user = await this.userModal
      .findOne({ email, password })
      .select(USER_KEYS)
      .lean()
      .exec();
    return user;
  }

  async updateUser(id: Types.ObjectId, body: UpdateUserDto) {
    const user = await this.userModal
      .findByIdAndUpdate(id, { $set: body }, { new: true })
      .lean()
      .exec();
    if (!user) throw new NotFoundException('User not found');
    const filteredUser = plainToInstance(UpdateUserResDto, user, {
      excludeExtraneousValues: true,
    });
    return filteredUser;
  }

  async delete(id: Types.ObjectId) {
    const resp = await this.userModal.findByIdAndDelete(id);
    return `User (${resp?.email}) deleted successfully.`;
  }
}
