import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const data: Prisma.EmployeeCreateInput = createEmployeeDto
    

    const createEmployee = await this.prisma.employee.create({data})
    
    return {createEmployee}
  }

  findAll() {
    return this.prisma.employee.findMany()
  }

  findOne(id: string) {
    return this.prisma.employee.findUnique({ where: { id }});
  }

  findEmail(email: string) {
    return this.prisma.employee.findUnique({ where: { email }});
  }

  findCpf_cnpj(cpf_cnpj: string) {
    return this.prisma.employee.findUnique({ where: { cpf_cnpj }});
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeExist = await this.findOne(id)
    if (!employeeExist) {
      console.log("This Employee not existe")
      return
    }

    return await this.prisma.employee.update({ where: { id }, data: updateEmployeeDto})
 
  }

  async remove(id: string) {
    const employeeExist = await this.findOne(id)
    if (!employeeExist) {
      console.log("This employee not existe")
      return
    }

    return await this.prisma.employee.delete({ where: { id }})
  }
}
