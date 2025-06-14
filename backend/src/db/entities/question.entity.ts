import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  statement: string;

  @Column('text')
  optionA: string;

  @Column('text')
  optionB: string;

  @Column('text')
  optionC: string;

  @Column('text')
  optionD: string;

  @Column({ type: 'char', length: 1 })
  correctOption: 'A' | 'B' | 'C' | 'D';
}
