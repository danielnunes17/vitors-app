import { UserType } from './../enum/user-type.enum';
import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<UserSchema>;
@Schema({ timestamps: true })
export class UserSchema {
  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true, unique: true, type: String })
  cpf: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, unique: true, type: String })
  phone: string;

  @Prop({ required: true, unique: true, type: String })
  password: string;

  @Prop({ type: String, required: true })
  role: string;

  @Prop({ type: Number, default: null })
  userType: UserType;

  @Prop({ type: Boolean, default: null })
  isCpfValid: boolean;

  @Prop({ type: Boolean, default: null })
  isEmailValid: boolean;

  @Prop({ type: Boolean, default: null })
  isPhoneValid: boolean;

  @Prop({ type: Date, default: null })
  createdAt?: Date;

  @Prop({ type: Date, default: null })
  updatedAt?: Date;
}
export const User = SchemaFactory.createForClass(UserSchema);
