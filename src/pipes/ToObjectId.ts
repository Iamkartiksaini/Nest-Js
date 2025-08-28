import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId, Types } from 'mongoose';

@Injectable()
export class ObjectIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("value ==>", typeof value)
    console.log("meta-data ==>", metadata)
    const isVaildObjectId = isValidObjectId(value)
     if (!isVaildObjectId) {
      throw new BadRequestException( `This ${value} is not a vaild Id.`);
    }
    const id = new Types.ObjectId(value)
    return id; 
  }
}
