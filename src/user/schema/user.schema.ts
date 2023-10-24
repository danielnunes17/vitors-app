import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  cpf: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, unique: true, type: String })
  phone: string;

  @Prop({ required: true, unique: true, type: String })
  password: string;

  @Prop({ type: Date, default: null })
  createdAt?: Date;

  @Prop({ type: Date, default: null })
  updatedAt?: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
