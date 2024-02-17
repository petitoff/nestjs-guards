import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  /**
   * Sign token
   * @param token - token to sign
   * @param arg1 - secret key
   * @returns
   */
  async verifyAsync(token: string, arg1: { secret: any }) {
    try {
      return jwt.verify(token, arg1.secret);
    } catch (e) {
      throw new Error('Token verification failed');
    }
  }
}
