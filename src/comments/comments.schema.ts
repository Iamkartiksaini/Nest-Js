import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type CommentsDocumments = Comment & Document

@Schema({ timestamps: true, versionKey: false })
export class Comment {

    @Prop({
        type: Types.ObjectId,
        ref: "Users",
        required: true
    })
    authorId: Types.ObjectId

    @Prop({
        type: Types.ObjectId,
        ref: "Posts",
        required: true
    })
    postId: Types.ObjectId

    @Prop({
        type: Types.ObjectId,
        ref: Comment.name,
    })
    replyOf?: Types.ObjectId

    @Prop({ maxLength: 500, min: 1, required: true })
    text: string
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);
