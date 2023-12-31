import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @ApiProperty({
    example: 'teste@teste.com.br',
    description: `O e-mail é necessário para o login.`
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Fiat@147',
    description: `Email é obrigatório.`
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({
    example: 'Fulano de Tal',
    description: `Nome do usuário, campo obrigatorio`
  })
  @IsString()
  name: string;
}
