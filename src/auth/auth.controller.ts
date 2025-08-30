import {
  Body,
  Controller,
  Post,
  SetMetadata,
} from '@nestjs/common';
import { ApiBody,  } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) { }

  @Post('login')
  @SetMetadata("PublicRoute", true)
  @ApiBody({ type: LoginUserDto })
  login(@Body() body: LoginUserDto) {
    return this.AuthService.login(body);
  }
}
