import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) { }
    @Post("create")
    async createComment(
        @Body() commentBody
    ) {
        return this.commentService.addComment(commentBody)
    }

}
