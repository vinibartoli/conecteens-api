/*
  Warnings:

  - You are about to drop the `_AulaToProfessor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AulaToTurma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_AulaToProfessor` DROP FOREIGN KEY `_AulaToProfessor_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AulaToProfessor` DROP FOREIGN KEY `_AulaToProfessor_B_fkey`;

-- DropForeignKey
ALTER TABLE `_AulaToTurma` DROP FOREIGN KEY `_AulaToTurma_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AulaToTurma` DROP FOREIGN KEY `_AulaToTurma_B_fkey`;

-- AlterTable
ALTER TABLE `aulas` ADD COLUMN `professorId` INTEGER NULL,
    ADD COLUMN `turmaId` INTEGER NULL;

-- DropTable
DROP TABLE `_AulaToProfessor`;

-- DropTable
DROP TABLE `_AulaToTurma`;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_professorId_fkey` FOREIGN KEY (`professorId`) REFERENCES `professores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `turmas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
