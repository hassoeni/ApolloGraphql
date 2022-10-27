/*
  Warnings:

  - A unique constraint covering the columns `[complexnaam]` on the table `Complex` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Complex_complexnaam_key" ON "Complex"("complexnaam");
