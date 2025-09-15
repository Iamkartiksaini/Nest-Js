import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCommentDto {
    @IsMongoId()
    @ApiProperty({
        example: '64f1cdd1a2f33d2d08f9f123',
        description: 'The ID of the user who authored the comment',
    })
    authorId: string;

    @ApiProperty({
        example: '64f1cdd1a2f33d2d08f9f123',
        description: 'PostId is required to post comment',
    })
    postId: string;

    @ApiProperty({
        example: 'I am Comment',
        description: "Type your thoughts...",
    })
    text: string;

    @ApiProperty({
        example: '64f1cdd1a2f33d2d08f9f123',
        description: "Comment Id, If Replying to someone's comment",
    })
    replyOf?: string;
}


export class CreateTransformCommentDto {
    postId: Types.ObjectId;
    authorId: Types.ObjectId;
    text: string;
    replyOf?: Types.ObjectId;
}