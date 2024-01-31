/*
  Warnings:

  - You are about to drop the column `aulaId` on the `alunos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `alunos_aulaId_fkey`;

-- AlterTable
ALTER TABLE `alunos` DROP COLUMN `aulaId`;

-- CreateTable
CREATE TABLE `Aluno_Aulas` (
    `alunoId` INTEGER NOT NULL,
    `aulaId` INTEGER NOT NULL,

    PRIMARY KEY (`alunoId`, `aulaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno_Aulas` ADD CONSTRAINT `Aluno_Aulas_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno_Aulas` ADD CONSTRAINT `Aluno_Aulas_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `aulas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
