import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const data: Prisma.ClientCreateInput = {
      ...createClientDto,
      password: await bcrypt.hash(createClientDto.password, 10),
    };

    const createClient = await this.prisma.client.create({data});

    return {
      ...createClient,
      password: undefined,
    }


    return {}
  }

  findAll() {
    return this.prisma.client.findMany()
  }

  findOne(id: string) {
    return this.prisma.client.findUnique({ where: { id }});
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const clientExist = await this.findOne(id)
    if (!clientExist) {
      console.log("This Client not existe")
      return
    }

    return await this.prisma.client.update({ where: { id }, data: updateClientDto})
 
  }

  async remove(id: string) {
    const clientExist = await this.findOne(id)
    if (!clientExist) {
      console.log("This client not existe")
      return
    }

    return await this.prisma.client.delete({ where: { id }})
  }
}
