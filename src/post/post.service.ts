import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import { Model, Types } from 'mongoose';

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

  async delete(id: string): Promise<Post | null> {
    const objectId = new Types.ObjectId(id);
    return this.postModel.findOneAndDelete({ _id: objectId }).exec();
  }
}
