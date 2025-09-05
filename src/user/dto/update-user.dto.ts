import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { Expose } from 'class-transformer';

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

export class UpdateUserResDto {
  @ApiProperty({ example: "John" })
  @Expose()
  // @Transform(({ value }) => parseFloat(value), { toClassOnly: true }) // only on input
  // @Transform(({ value }) => value.toFixed(2), { toPlainOnly: true }) // only on output
  name: string;
  
  @ApiProperty({ example: "john.doe@example.com" })
  @Expose()
  email: string;
}
