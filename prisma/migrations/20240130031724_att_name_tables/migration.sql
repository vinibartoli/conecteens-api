/*
  Warnings:

  - You are about to drop the `Aulas_Alunos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Aulas_Alunos` DROP FOREIGN KEY `Aulas_Alunos_alunoId_fkey`;

-- DropForeignKey
ALTER TABLE `Aulas_Alunos` DROP FOREIGN KEY `Aulas_Alunos_aulaId_fkey`;

-- DropTable
DROP TABLE `Aulas_Alunos`;

-- CreateTable
CREATE TABLE `aula_aluno` (
    `aulaId` INTEGER NOT NULL,
    `alunoId` INTEGER NOT NULL,

    PRIMARY KEY (`aulaId`, `alunoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aula_aluno` ADD CONSTRAINT `aula_aluno_aulaId_fkey` FOREIGN KEY (`aulaId`) REFERENCES `aulas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aula_aluno` ADD CONSTRAINT `aula_aluno_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
