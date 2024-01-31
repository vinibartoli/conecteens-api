/*
  Warnings:

  - You are about to drop the column `professorId` on the `aulas` table. All the data in the column will be lost.
  - You are about to drop the column `turmaId` on the `aulas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `aulas` DROP FOREIGN KEY `aulas_professorId_fkey`;

-- DropForeignKey
ALTER TABLE `aulas` DROP FOREIGN KEY `aulas_turmaId_fkey`;

-- AlterTable
ALTER TABLE `aulas` DROP COLUMN `professorId`,
    DROP COLUMN `turmaId`;

-- CreateTable
CREATE TABLE `_AulaToProfessor` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AulaToProfessor_AB_unique`(`A`, `B`),
    INDEX `_AulaToProfessor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AulaToTurma` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AulaToTurma_AB_unique`(`A`, `B`),
    INDEX `_AulaToTurma_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AulaToProfessor` ADD CONSTRAINT `_AulaToProfessor_A_fkey` FOREIGN KEY (`A`) REFERENCES `aulas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AulaToProfessor` ADD CONSTRAINT `_AulaToProfessor_B_fkey` FOREIGN KEY (`B`) REFERENCES `professores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AulaToTurma` ADD CONSTRAINT `_AulaToTurma_A_fkey` FOREIGN KEY (`A`) REFERENCES `aulas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AulaToTurma` ADD CONSTRAINT `_AulaToTurma_B_fkey` FOREIGN KEY (`B`) REFERENCES `turmas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
