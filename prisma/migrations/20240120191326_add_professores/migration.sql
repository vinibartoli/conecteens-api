/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `alunos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `professores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `dataNasc` DATETIME(3) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    UNIQUE INDEX `professores_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `alunos_cpf_key` ON `alunos`(`cpf`);
