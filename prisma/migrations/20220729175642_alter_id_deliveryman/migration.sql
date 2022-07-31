/*
  Warnings:

  - You are about to drop the column `id_delivery` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_id_delivery_fkey`;

-- AlterTable
ALTER TABLE `deliveries` DROP COLUMN `id_delivery`,
    ADD COLUMN `id_deliveryMan` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_id_deliveryMan_fkey` FOREIGN KEY (`id_deliveryMan`) REFERENCES `deliveryman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
