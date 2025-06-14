import { ConflictException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/db/entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private userRepository: Repository<Question>, // <-- CORRIGIDO AQUI
  ) {}

  async create(data: CreateQuestionDto): Promise<void> {
    const existing = await this.userRepository.findOne({
      where: { name: data.name, outro: data.outro },
    });
    if (existing) {
      throw new ConflictException('Questão já existe');
    }

    const newQuestion = this.userRepository.create({
      ...data,
    });

    await this.userRepository.save(newQuestion);
  }

  findAll() {
    return `This action returns all questions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
