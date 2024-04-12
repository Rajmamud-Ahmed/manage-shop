import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './db/user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly UsrModel: Model<User>) {}

  async create(usrDto: UserDto): Promise<User> {
    const createUsers = new this.UsrModel(usrDto);
    return createUsers.save();
  }
  async findAll(): Promise<User[]> {
    return this.UsrModel.find().exec();
  }
}
