import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Full name of the user',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User CPF (only numbers)',
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @MaxLength(11)
  @IsNumberString()
  cpf: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'E-mail of the user',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'User phone',
    type: String,
    required: true,
  })
  @IsNumberString()
  @IsPhoneNumber('BR')
  phone: string;

  @ApiProperty({
    type: String,
    description: 'Password of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsStrongPassword()
  @Matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/,
    { message: 'Password too weak' },
  )
  password: string;
}
