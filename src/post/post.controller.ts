import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './post.dto';

@Controller('post')
export class PostController {
    constructor(private readonly  postService:PostService){}
    @Get()
    posts(){
        return this.postService.findAll()
    }

    @Post()
    create(@Body() postDto:CreatePostDto ){
        return this.postService.create(postDto)
    }

    @Delete(":id")
    delete(@Param("id") id:string ) {
        return this.postService.delete(id);
    }
}
