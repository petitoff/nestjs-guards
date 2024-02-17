import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('users')
export class UsersController {
  @Get()
  @UseGuards(AuthGuard)
  getUsers(): { message: string } {
    return { message: 'This action returns all users' };
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles(['admin'])
  postUsers(): { message: string } {
    return { message: 'This action adds a new user' };
  }
}
