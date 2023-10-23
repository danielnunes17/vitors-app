import { UserType } from '../enum/user-type.enum';

export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  role: string;
  userType: UserType;
}
