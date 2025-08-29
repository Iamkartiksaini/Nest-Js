import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login.dto';
import { UserToken } from './dto/user-token';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private UserService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return { userId: 1, username };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(body: LoginUserDto) {
    const isUser = await this.UserService.userModal
      .findOne({ email: body.email })
      .lean()
      .exec();

    if (!isUser) {
      throw new NotFoundException(
        `User is not registered with this ${body.email} email`,
      );
    }

    const {password, ...otherFields}= isUser
    if (body.password !== password) {
      throw new NotFoundException('Incorrect Password');
    }
  
    const payload = { sub: isUser._id, user: otherFields };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verifyToken(token) {
    try {
      return this.jwtService.verify(token, { secret: 'secret123' });
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
