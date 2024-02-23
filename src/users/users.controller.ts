import { Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { UsersGuard } from 'src/users/users.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('users')
export class UsersController {
  private logger = new Logger(UsersController.name);

  @Get()
  @UseGuards(UsersGuard)
  getUsers(): { message: string } {
    try {
      return { message: 'This action returns all users' };
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles(['admin'])
  postUsers(): { message: string } {
    try {
      return { message: 'This action adds a new user' };
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
