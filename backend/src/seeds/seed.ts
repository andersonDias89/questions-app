// src/seeds/seed.ts
import { DataSource } from 'typeorm';
import { Question } from 'src/db/entities/question.entity';
import { faker } from '@faker-js/faker';

// Configurar a conexão manualmente
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123123',
  database: 'mydb',
  entities: [Question],
  synchronize: false, // não altere o schema do banco!
});

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Question);

  const questions: Question[] = [];

  for (let i = 0; i < 20; i++) {
    const statementLength = faker.number.int({ min: 50, max: 200 });
    const statement = faker.lorem.sentence(statementLength / 10);

    const options = ['A', 'B', 'C', 'D'] as const;

    const question = repo.create({
      statement,
      optionA: faker.lorem.words(faker.number.int({ min: 2, max: 10 })),
      optionB: faker.lorem.words(faker.number.int({ min: 3, max: 8 })),
      optionC: faker.lorem.words(faker.number.int({ min: 1, max: 6 })),
      optionD: faker.lorem.words(faker.number.int({ min: 2, max: 9 })),
      correctOption: faker.helpers.arrayElement(options),
    });

    questions.push(question);
  }

  await repo.save(questions);
  console.log('✅ 20 perguntas inseridas com sucesso!');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Erro ao executar seed:', err);
  process.exit(1);
});
