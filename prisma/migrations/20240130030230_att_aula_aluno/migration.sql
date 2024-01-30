/*
  Warnings:

  - You are about to drop the `_AlunoToAulas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `turmaId` to the `aulas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_AlunoToAulas` DROP FOREIGN KEY `_AlunoToAulas_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AlunoToAulas` DROP FOREIGN KEY `_AlunoToAulas_B_fkey`;

-- AlterTable
ALTER TABLE `aulas` ADD COLUMN `turmaId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_AlunoToAulas`;

-- CreateTable
CREATE TABLE `Aulas_Alunos` (
    `aulaId` INTEGER NOT NULL,
    `alunoId` INTEGER NOT NULL,

    PRIMARY KEY (`aulaId`, `alunoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `turmas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aulas_Alunos` ADD CONSTRAINT `Aulas_Alunos_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `aulas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aulas_Alunos` ADD CONSTRAINT `Aulas_Alunos_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
