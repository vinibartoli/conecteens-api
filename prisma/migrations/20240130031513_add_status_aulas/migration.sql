/*
  Warnings:

  - Added the required column `status` to the `aulas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aulas` ADD COLUMN `status` BOOLEAN NOT NULL;
