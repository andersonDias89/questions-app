import { DataSource } from 'typeorm';
import { Question } from 'src/db/entities/question.entity';
import 'dotenv/config';

// Configurar a conexão manualmente
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Question],
  synchronize: false,
});

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Question);

  const questions = [
    repo.create({
      statement:
        'Em JavaScript, o que ocorre quando uma função é chamada com menos argumentos do que os parâmetros esperados?',
      optionA: 'A função lança um erro de número de argumentos.',
      optionB: 'Os parâmetros restantes recebem o valor undefined.',
      optionC: 'Os valores ausentes são preenchidos com zero automaticamente.',
      optionD: 'A execução da função é abortada.',
      correctOption: 'B',
    }),
    repo.create({
      statement: 'Qual é o resultado de `[] + []` em JavaScript e por quê?',
      optionA: 'Erro de tipo, pois arrays não podem ser somados.',
      optionB: '[]',
      optionC: '"" (string vazia), devido à coerção de tipos.',
      optionD: 'undefined',
      correctOption: 'C',
    }),
    repo.create({
      statement: 'Sobre `async/await`, qual das opções está correta?',
      optionA: '`await` só pode ser usado dentro de funções `async`.',
      optionB: '`async` transforma uma função em síncrona.',
      optionC: '`await` pausa o código até uma função síncrona ser concluída.',
      optionD: '`async` evita o uso de promessas.',
      correctOption: 'A',
    }),
    repo.create({
      statement:
        'O que acontece quando você chama `parseInt("08")` em JavaScript?',
      optionA: 'Retorna 8.',
      optionB: 'Retorna 0.',
      optionC: 'Retorna NaN.',
      optionD: 'Retorna "08".',
      correctOption: 'A',
    }),
    repo.create({
      statement:
        'Qual é a principal vantagem do uso de arrow functions (`=>`) em relação a funções tradicionais?',
      optionA: 'Arrow functions são mais rápidas em tempo de execução.',
      optionB: 'Arrow functions não possuem seu próprio `this`.',
      optionC: 'Arrow functions podem ser chamadas antes da declaração.',
      optionD: 'Arrow functions permitem hoisting.',
      correctOption: 'B',
    }),
    repo.create({
      statement:
        'Dado o código: `const x = {}; const y = x; y.prop = 1;` Qual o valor de `x.prop`?',
      optionA: 'undefined',
      optionB: 'null',
      optionC: '1',
      optionD: 'Erro, pois `x` não tem a propriedade `prop`.',
      correctOption: 'C',
    }),
    repo.create({
      statement: 'Qual dessas opções define corretamente um objeto imutável?',
      optionA: 'Um objeto declarado com `const`.',
      optionB: 'Um objeto passado como parâmetro para uma função.',
      optionC: 'Um objeto criado com `Object.freeze()`.',
      optionD: 'Qualquer objeto, pois objetos são imutáveis por padrão.',
      correctOption: 'C',
    }),
    repo.create({
      statement: 'O que significa "hoisting" em JavaScript?',
      optionA:
        'Movimentação de funções e variáveis para o topo do escopo durante a execução.',
      optionB: 'Reordenação de eventos no DOM.',
      optionC: 'Execução de funções assíncronas de forma síncrona.',
      optionD: 'Criação de escopos globais para variáveis.',
      correctOption: 'A',
    }),
    repo.create({
      statement: 'O que o método `Array.prototype.map()` retorna?',
      optionA: 'Um novo array com os elementos originais duplicados.',
      optionB: 'O array original modificado.',
      optionC:
        'Um novo array com os resultados da função aplicada em cada elemento.',
      optionD: 'Nada, ele apenas itera pelos elementos.',
      correctOption: 'C',
    }),
    repo.create({
      statement:
        'Qual será o valor final de `x` no código a seguir? `let x = 5; x += x++ + ++x;`',
      optionA: '16',
      optionB: '17',
      optionC: '15',
      optionD: 'Erro de sintaxe',
      correctOption: 'B',
    }),
  ];

  await repo.save(questions);
  console.log(`✅ ${questions.length} perguntas reais inseridas com sucesso!`);
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Erro ao executar seed:', err);
  process.exit(1);
});
