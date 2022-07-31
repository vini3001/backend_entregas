/*
  Warnings:

  - You are about to drop the column `id_deliveryMan` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_id_deliveryMan_fkey`;

-- AlterTable
ALTER TABLE `deliveries` DROP COLUMN `id_deliveryMan`,
    ADD COLUMN `id_deliveryman` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_id_deliveryman_fkey` FOREIGN KEY (`id_deliveryman`) REFERENCES `deliveryman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
