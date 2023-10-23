import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto as CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { }
