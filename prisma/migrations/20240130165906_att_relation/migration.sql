/*
  Warnings:

  - You are about to drop the `aula_aluno` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `aula_aluno` DROP FOREIGN KEY `aula_aluno_alunoId_fkey`;

-- DropForeignKey
ALTER TABLE `aula_aluno` DROP FOREIGN KEY `aula_aluno_aulaId_fkey`;

-- DropTable
DROP TABLE `aula_aluno`;

-- CreateTable
CREATE TABLE `_AlunoToAula` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AlunoToAula_AB_unique`(`A`, `B`),
    INDEX `_AlunoToAula_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AlunoToAula` ADD CONSTRAINT `_AlunoToAula_A_fkey` FOREIGN KEY (`A`) REFERENCES `alunos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToAula` ADD CONSTRAINT `_AlunoToAula_B_fkey` FOREIGN KEY (`B`) REFERENCES `aulas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
