/*
  Warnings:

  - Added the required column `cpf` to the `alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT true;
