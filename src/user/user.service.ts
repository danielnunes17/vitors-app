import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { UserSchema } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserSchema>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    const user = await this.userModel.find();
    return user;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById({ _id: id });
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).lean();
  }

  async remove(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.deleteOne({ _id: id, updateUserDto }).lean();
  }
}
