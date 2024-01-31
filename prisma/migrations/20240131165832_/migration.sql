/*
  Warnings:

  - You are about to drop the `Aluno_Aulas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Aluno_Aulas` DROP FOREIGN KEY `Aluno_Aulas_alunoId_fkey`;

-- DropForeignKey
ALTER TABLE `Aluno_Aulas` DROP FOREIGN KEY `Aluno_Aulas_aulaId_fkey`;

-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `aulaId` INTEGER NULL;

-- DropTable
DROP TABLE `Aluno_Aulas`;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `aulas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
