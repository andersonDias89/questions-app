import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaQuestion1749927739995 implements MigrationInterface {
    name = 'CriarTabelaQuestion1749927739995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "statement" text NOT NULL, "optionA" text NOT NULL, "optionB" text NOT NULL, "optionC" text NOT NULL, "optionD" text NOT NULL, "correctOption" character(1) NOT NULL, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
