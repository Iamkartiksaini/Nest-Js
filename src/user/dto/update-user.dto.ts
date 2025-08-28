import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UpdateUserDto {
  @ApiProperty({ example: "John" })
  @IsString()
  name: string;

  @ApiProperty({ example: "john.doe@example.com" })
  @IsEmail()
  @IsString()
  email: string;
}
