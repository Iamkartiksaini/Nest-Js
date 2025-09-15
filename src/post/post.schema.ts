// post.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true
  })
  author: Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: "Comments" }], default: [] })
  comments?: Types.ObjectId[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
