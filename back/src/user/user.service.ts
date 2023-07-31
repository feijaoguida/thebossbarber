import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id }});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userExist = await this.findOne(id)
    if (!userExist) {
      console.log("This User not existe")
      return
    }

    return await this.prisma.user.update({ where: { id }, data: updateUserDto})
  }

  async remove(id: string) {
     const userExist = await this.findOne(id)
    if (!userExist) {
      console.log("This User not existe")
      return
    }

    return await this.prisma.user.delete({ where: { id }})
  }
}
