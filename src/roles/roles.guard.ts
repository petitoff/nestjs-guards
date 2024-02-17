import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>(Roles, context.getHandler());
    console.log('Roles:', roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest<Request>();
    const user = request.credentials;

    // get jwt token from request
    const jwt = request.headers['authorization']?.split(' ')[1];
    console.log('JWT:', jwt);

    console.log('User:', user);
    // return roles.some((role) => user.roles?.includes(role));

    return true;
  }
}
