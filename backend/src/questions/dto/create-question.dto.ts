import { IsString, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsString({ message: 'Pergunta precisa ser uma string' })
  @Length(10, 150, {
    message: 'A pergunta precisa ter entre 10 e 150 caracteres',
  })
  name: string;

  @IsString({ message: 'Pergunta precisa ser uma string' })
  outro: string;
}
