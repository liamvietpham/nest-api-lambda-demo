import { Injectable } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';

@Injectable()
export class UsersService {
  findAll(page?: number, limit?: number) {
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
    const result = {
      id: Math.floor(Math.random() * 1000),
      name: createUserDto.name,
      email: createUserDto.email,
    };

    return {
      message: 'This action adds a new user',
      data: result,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const result = {
      id,
      name: updateUserDto?.name || `User #${id}`,
      email: updateUserDto?.email || `user${id}@example.com`,
    };

    return {
      message: `This action updates a #${id} user`,
      data: result,
    };
  }

  remove(id: number) {
    return {
      message: `This action removes a #${id} user`,
    };
  }
}
