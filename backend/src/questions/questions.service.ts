import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/db/entities/question.entity';
import { Repository } from 'typeorm';
import { QuestionDto } from './dto/question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>, // <-- CORRIGIDO AQUI
  ) {}

  async create(data: CreateQuestionDto): Promise<void> {
    const existing = await this.questionRepository.findOne({
      where: {
        statement: data.statement,
        optionA: data.optionA,
        optionB: data.optionB,
        optionC: data.optionC,
        optionD: data.optionD,
      },
    });
    if (existing) {
      throw new ConflictException('Questão já existe');
    }

    const newQuestion = this.questionRepository.create({
      ...data,
    });

    await this.questionRepository.save(newQuestion);
  }

  async findAll(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async findById(id: string): Promise<QuestionDto> {
    const foundQuestion = await this.questionRepository.findOne({
      where: { id },
    });

    if (foundQuestion) {
      return foundQuestion as QuestionDto;
    }

    throw new NotFoundException(`Questão com ID ${id} não encontrada`);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
