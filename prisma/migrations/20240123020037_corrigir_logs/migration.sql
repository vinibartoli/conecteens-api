-- AlterTable
ALTER TABLE `alunos` MODIFY `dataalteracao` DATETIME(3) NULL,
    MODIFY `datacriacao` DATETIME(3) NULL,
    MODIFY `usuarioalteracao` VARCHAR(191) NULL,
    MODIFY `usuariocriacao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `professores` MODIFY `dataalteracao` DATETIME(3) NULL,
    MODIFY `datacriacao` DATETIME(3) NULL,
    MODIFY `usuarioalteracao` VARCHAR(191) NULL,
    MODIFY `usuariocriacao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `turmas` MODIFY `dataalteracao` DATETIME(3) NULL,
    MODIFY `datacriacao` DATETIME(3) NULL,
    MODIFY `usuarioalteracao` VARCHAR(191) NULL,
    MODIFY `usuariocriacao` VARCHAR(191) NULL;
