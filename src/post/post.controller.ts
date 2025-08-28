import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ObjectIdPipe } from 'src/pipes/ToObjectId';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('post')
export class PostController {
    constructor(private readonly  postService:PostService){}
    @Get()
    posts(){
        return this.postService.findAll()
    }

    @Post()
    @ApiOperation({
    summary: 'Create a new org',
    description: `This endpoint allows you to create a new org. This endpoint is accessible to everyone.`
    })
    create(@Body() postDto:CreatePostDto ){
        return this.postService.create(postDto)
    }

    @Delete(":id")
    @Roles(Role.ADMIN)
    delete(@Param("id",ObjectIdPipe) id :ObjectIdPipe) {
    const data =  this.postService.delete(id);
        return "Deleted"+ id  
    }    
}
