/*
  Warnings:

  - Added the required column `dataalteracao` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datacriacao` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioalteracao` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariocriacao` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataalteracao` to the `professores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datacriacao` to the `professores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioalteracao` to the `professores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariocriacao` to the `professores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataalteracao` to the `turmas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datacriacao` to the `turmas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioalteracao` to the `turmas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariocriacao` to the `turmas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `dataalteracao` DATETIME(3) NOT NULL,
    ADD COLUMN `datacriacao` DATETIME(3) NOT NULL,
    ADD COLUMN `usuarioalteracao` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuariocriacao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `professores` ADD COLUMN `dataalteracao` DATETIME(3) NOT NULL,
    ADD COLUMN `datacriacao` DATETIME(3) NOT NULL,
    ADD COLUMN `usuarioalteracao` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuariocriacao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `turmas` ADD COLUMN `dataalteracao` DATETIME(3) NOT NULL,
    ADD COLUMN `datacriacao` DATETIME(3) NOT NULL,
    ADD COLUMN `usuarioalteracao` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuariocriacao` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
