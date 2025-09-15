import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentsDocumments } from './comments.schema';
import { Model, Types } from 'mongoose';
import { Post, PostDocument } from 'src/post/post.schema';
import { CreateTransformCommentDto } from './dto/create-comment-dto';

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comment.name) private readonly CommentModel: Model<CommentsDocumments>,
        @InjectModel(Post.name) private readonly PostModel: Model<PostDocument>,
    ) { }

    async addComment({ postId, authorId, text, replyOf }:CreateTransformCommentDto) {
        const isPostExists = await this.PostModel.findById(postId)
        if (!isPostExists) throw new NotFoundException
        const createComment = await this.CommentModel.create({
            authorId, postId, text
        })
        const commentId = await createComment.save();

        await this.PostModel.findByIdAndUpdate(postId, {
            $push: { comments: commentId }
        })
        return commentId
    }
}
