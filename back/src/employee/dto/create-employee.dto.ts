import { ApiProperty } from '@nestjs/swagger';
import { Employee } from '../entities/employee.entity';
import {
  IsEmail,
  IsInt,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  isEmail,
} from 'class-validator';

export class CreateEmployeeDto extends Employee {
  @ApiProperty()
  @IsString()
  corporate_Name: string;

  @ApiProperty()
  @IsString()
  fantasy_name: string;

  @ApiProperty()
  @IsString()
  slogan: string;

  @ApiProperty()
  @IsString()
  logo: string;

  @ApiProperty()
  @IsString()
  photo_cover: string;

  @ApiProperty()
  @IsString()
  cpf_cnpj: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  site: string;

  @ApiProperty()
  @IsString()
  contact: string;

  @ApiProperty()
  @IsEmail()
  email_contact: string;

  @ApiProperty()
  @IsString()
  observation: string;
  
}
