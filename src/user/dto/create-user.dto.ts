import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ example: 'user', enum: ['admin', 'user'] })
  @IsString()
  role: Role;

  @ApiProperty({required:true})
  @IsString()
  password: string;
}
