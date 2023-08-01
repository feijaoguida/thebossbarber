import { ApiProperty } from '@nestjs/swagger';
import { Client } from '../entities/client.entity';
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

export class CreateClientDto extends Client {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  instagram: string;

  @ApiProperty()
  @IsString()
  facebook: string;

  @ApiProperty()
  @IsString()
  tiktok: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  zip: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @MinLength(7)
  @MaxLength(12)
  @IsString()
  fone: string;

  @ApiProperty()
  @IsString()
  whatsapp: string;

  @ApiProperty()
  @IsString()
  complementary: string;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsString()
  rg: string;

  @ApiProperty()
  @IsString()
  date_of_birth: string;

  @ApiProperty()
  @IsInt()
  restriction: number;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty()
  @IsString()
  Employee: string;

  
}
