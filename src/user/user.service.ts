import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    const user = await this.userModel.find().lean();
    return user;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById({ _id: id }).lean();
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email }).exec();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).lean();
  }

  async remove(id: string) {
    const user = await this.userModel.deleteOne({ _id: id }).lean();
    return user;
  }
}
