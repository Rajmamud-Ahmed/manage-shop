import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findUsers() {
    return await this.usersService.findAll();
  }
  @Post()
  async sendUser(@Body() userInfoDto: UserDto) {
    return await this.usersService.create(userInfoDto);
  }
}
