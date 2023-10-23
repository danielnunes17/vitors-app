import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { ReturnLogin } from './dto/returnLogin.dto';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import { validatePassword } from 'src/utils/password';
import { NotFoundException } from '@nestjs/common';
import { LoginPayload } from './dto/loginPlayload.dto';
import { ReturnUserDto } from 'src/user/dto/return-user.dto';

export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto): Promise<ReturnLogin> {
    const user: UserEntity | undefined = await this.userService
      .findByEmail(loginDto.email)
      .catch(() => undefined);

    const isMach = await validatePassword(
      loginDto.password,
      user?.password || '',
    );

    if (!user || !isMach) {
      throw new NotFoundException('Email or passord invalid');
    }
    return {
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
