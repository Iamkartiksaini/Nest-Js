import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
  Param,
  Patch,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ObjectIdPipe } from 'src/pipes/ToObjectId';
import { Types } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { PublicApi } from 'src/guards/public.guard';

  @ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @PublicApi()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @PublicApi()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  findById(@Param('id', ObjectIdPipe) id: Types.ObjectId) {
    console.log('api called ');
    return this.userService.findById(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    description: 'This api will return updated data of user',
    status: 200,
  })
  @ApiResponse({
    description: 'User not Found',
    status: 404,
  })
  updateUser(
    @Param('id', ObjectIdPipe) id: Types.ObjectId,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, body);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string', description: "user unique id is required." })
  delete(@Param('id', ObjectIdPipe) id: Types.ObjectId, @Req() req) {
    console.log(req?.user)
    return this.userService.delete(id);
  }
}
