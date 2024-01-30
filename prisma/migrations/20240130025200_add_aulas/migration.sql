-- CreateTable
CREATE TABLE `aulas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `professorId` INTEGER NOT NULL,
    `tema` VARCHAR(191) NOT NULL,
    `usuariocriacao` VARCHAR(191) NULL,
    `datacriacao` DATETIME(3) NULL,
    `usuarioalteracao` VARCHAR(191) NULL,
    `dataalteracao` DATETIME(3) NULL,

    UNIQUE INDEX `aulas_professorId_key`(`professorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AlunoToAulas` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AlunoToAulas_AB_unique`(`A`, `B`),
    INDEX `_AlunoToAulas_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_professorId_fkey` FOREIGN KEY (`professorId`) REFERENCES `professores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToAulas` ADD CONSTRAINT `_AlunoToAulas_A_fkey` FOREIGN KEY (`A`) REFERENCES `alunos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AlunoToAulas` ADD CONSTRAINT `_AlunoToAulas_B_fkey` FOREIGN KEY (`B`) REFERENCES `aulas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
