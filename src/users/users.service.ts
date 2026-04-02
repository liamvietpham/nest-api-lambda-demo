import { Injectable } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
  findAll(page: number, limit: number) {
    return {
      page,
      limit,
      data: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ],
    };
  }

  findOne(id: number) {
    return {
      id,
      name: `User #${id}`,
    };
  }

  create(createUserDto: CreateUserDto) {
    return {
      message: 'This action adds a new user',
      data: createUserDto,
    };
  }

  update(id: number, updateUserDto: Partial<CreateUserDto>) {
    return {
      message: `This action updates a #${id} user`,
      data: updateUserDto,
    };
  }

  remove(id: number) {
    return {
      message: `This action removes a #${id} user`,
    };
  }
}
