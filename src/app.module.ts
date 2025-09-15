import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { Root } from "./root";
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process?.env?.MONGO_URI || ""),
    UserModule,
    PostModule,
    AuthModule,
    CommentsModule,
  ],
  providers: [],
  controllers: [Root],
})
export class AppModule {}
