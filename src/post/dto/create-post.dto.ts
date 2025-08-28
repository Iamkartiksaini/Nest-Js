import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class CreatePostDto {
  @IsMongoId()
  @ApiProperty({
    example: '64f1cdd1a2f33d2d08f9f123',
    description: 'The ID of the user who authored the post',
  })
  author:string;

  @ApiProperty({
    example: 'This is a post about NestJS.',
    description: 'Content of the post',
  })
  content: string;
}
