-- 삭제여부 추가.. (삭제시 물리적으로 삭제하지 않고 논리적으로 삭제한다.)
ALTER TABLE `customers`    ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `employees`    ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `offices`      ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `orderdetails` ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `orders`       ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `payments`     ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `productlines` ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
ALTER TABLE `products`     ADD COLUMN `del` ENUM('Y','N') NOT NULL DEFAULT 'N' FIRST;
