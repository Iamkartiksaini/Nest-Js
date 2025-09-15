import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentsSchema } from './comments.schema';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentsSchema }]),
    PostModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [MongooseModule, CommentsService]
})
export class CommentsModule { }
