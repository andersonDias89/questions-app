import { IsIn, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty({ message: 'The statement is required.' })
  statement: string;

  @IsString()
  @IsNotEmpty({ message: 'Option A is required.' })
  optionA: string;

  @IsString()
  @IsNotEmpty({ message: 'Option B is required.' })
  optionB: string;

  @IsString()
  @IsNotEmpty({ message: 'Option C is required.' })
  optionC: string;

  @IsString()
  @IsNotEmpty({ message: 'Option D is required.' })
  optionD: string;

  @IsString()
  @IsIn(['A', 'B', 'C', 'D'], {
    message: 'Correct option must be A, B, C, or D.',
  })
  correctOption: 'A' | 'B' | 'C' | 'D';
}
