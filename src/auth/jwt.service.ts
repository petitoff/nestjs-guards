import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  /**
   * Verify is a method that verifies the token and returns the payload.
   * @param token
   * @param arg1
   */
  async verifyAsync(token: string, arg1: { secret: any }) {
    try {
      return jwt.verify(token, arg1.secret);
    } catch (e) {
      throw new Error('Token verification failed');
    }
  }
}
