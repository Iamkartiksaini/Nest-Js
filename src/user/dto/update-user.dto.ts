import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @ApiProperty({ example: "John" })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: "john.doe@example.com" })
  @IsOptional()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ example: "password" })
  @IsOptional()
  @IsString()
  password: string;
}
