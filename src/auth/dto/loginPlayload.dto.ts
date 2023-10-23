import { UserEntity } from 'src/user/entity/user.entity';
import { UserSchema } from 'src/user/schema/user.schema';

export class LoginPayload {
  id: number;
  typeUser: number;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.typeUser = user.userType;
  }
}
