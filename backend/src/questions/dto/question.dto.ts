import { IsString } from 'class-validator';

export class QuestionDto {
  @IsString()
  statement: string;

  @IsString()
  optionA: string;

  @IsString()
  optionB: string;

  @IsString()
  optionC: string;

  @IsString()
  optionD: string;

  @IsString()
  correctOption: 'A' | 'B' | 'C' | 'D';
}
