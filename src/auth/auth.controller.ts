import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiBody, ApiParam, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginUserDto })
  login(@Body() body: LoginUserDto) {
    return this.AuthService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth("authorization")
  @Get('profile')
  getProfile(@Request() req:{user:LoginUserDto}) {
    return req.user
  }
}
