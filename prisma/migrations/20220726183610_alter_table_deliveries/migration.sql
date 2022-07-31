-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_id_delivery_fkey`;

-- AlterTable
ALTER TABLE `deliveries` MODIFY `id_delivery` VARCHAR(191) NULL,
    MODIFY `end_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_id_delivery_fkey` FOREIGN KEY (`id_delivery`) REFERENCES `deliveryman`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
