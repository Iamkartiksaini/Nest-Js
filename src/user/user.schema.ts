import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  // collection: 'users',
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    "enum": ["user", "admin"],
    default: "user"
  })
  role: string;

  @Prop({ minlength: 3, maxlength: 20 })
  password: string;
}


export const UserSchema = SchemaFactory.createForClass(User);


// // ✅ PRE HOOK
// UserSchema.pre<UserDocument>('save', async function (next) {
//   console.log('Hashing password for:', this.email);
//   if (this.isModified('password')) {
//     // fake hashing logic
//     this.password = `hashed(${this.password})`;
//   }
//   next();
// });

// // ✅ POST HOOK
// UserSchema.post<UserDocument>('save', function (doc) {
//   console.log(`User ${doc.email} was saved successfully.`);
// });

// // ✅ VALIDATE HOOK
// UserSchema.path('email').validate(function (value: string) {
//   return value.endsWith('@example.com'); // only allow emails from example.com
// }, 'Email must be from @example.com');



// 💡 Types of Middleware You Can Use

// Hook Type	    Description                         Example Trigger
// pre	          Runs before a specific action     	'save', 'remove', 'updateOne', etc.
// post	          Runs after a specific action	      'save', 'remove', 'updateOne'
// validate	      Validates a property manually	       On save or update