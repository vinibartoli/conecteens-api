-- CreateTable
CREATE TABLE `alunos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nomeResponsavel` VARCHAR(191) NOT NULL,
    `dataNasc` DATETIME(3) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `celularResponsavel` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
