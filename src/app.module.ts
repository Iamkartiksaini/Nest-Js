import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { Root } from "./root";
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process?.env?.MONGO_URI || ""),
    UserModule,
    PostModule,
  ],
  providers: [],
  controllers: [Root],
})
export class AppModule {}
