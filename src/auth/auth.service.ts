import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'YOUR_SECRET_KEY'; // Replace with your secret key

  login(loginDto: LoginDto) {
    const payload = { username: loginDto.username, sub: loginDto.userId };
    const token = jwt.sign(payload, this.jwtSecret);
    return { access_token: token };
  }
}
