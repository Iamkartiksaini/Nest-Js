import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import { Model, Types } from 'mongoose';
import { ObjectIdPipe } from 'src/pipes/ToObjectId';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  async create(CreatePostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(CreatePostDto);
    return newPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel
      .find()
      .populate('author') // Optional: remove if not needed
      .lean()
      .exec();
  }

  async delete(id:ObjectIdPipe): Promise<Post | null> {
    return await this.postModel.findOneAndDelete({ _id: id }).exec();
  }
}
