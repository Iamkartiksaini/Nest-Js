import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ required: true,example:"1234" })
  @IsString()
  password: string;
}
