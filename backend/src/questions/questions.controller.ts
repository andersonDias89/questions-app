import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionDto } from './dto/question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() question: CreateQuestionDto) {
    await this.questionsService.create(question);
    return { message: 'Questão criada' };
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<QuestionDto> {
    return this.questionsService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
