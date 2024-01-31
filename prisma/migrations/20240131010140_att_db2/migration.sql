/*
  Warnings:

  - You are about to drop the `_AlunoToAula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_AlunoToAula` DROP FOREIGN KEY `_AlunoToAula_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AlunoToAula` DROP FOREIGN KEY `_AlunoToAula_B_fkey`;

-- DropTable
DROP TABLE `_AlunoToAula`;

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
