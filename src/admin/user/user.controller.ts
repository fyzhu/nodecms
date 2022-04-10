import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';

@Controller('admin/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @Get('info')
  info(): object {
    return this.userService.info();
  }
  @Post('logout')
  logout(): string {
    return this.userService.logout();
  }
}
