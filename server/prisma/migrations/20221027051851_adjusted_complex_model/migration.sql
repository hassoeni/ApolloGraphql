/*
  Warnings:

  - You are about to drop the column `userId` on the `Complex` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Complex" (
    "complexid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "complexnummer" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "complexnaam" TEXT NOT NULL,
    "gbo" INTEGER NOT NULL,
    "marktwaarde" INTEGER NOT NULL,
    "huur" INTEGER NOT NULL,
    "streefhuur" INTEGER NOT NULL,
    "Gemiddeld_PO" INTEGER NOT NULL,
    "gebruikerId" INTEGER,
    CONSTRAINT "Complex_gebruikerId_fkey" FOREIGN KEY ("gebruikerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Complex" ("Gemiddeld_PO", "complexid", "complexnaam", "complexnummer", "createdAt", "gbo", "huur", "marktwaarde", "streefhuur", "updatedAt") SELECT "Gemiddeld_PO", "complexid", "complexnaam", "complexnummer", "createdAt", "gbo", "huur", "marktwaarde", "streefhuur", "updatedAt" FROM "Complex";
DROP TABLE "Complex";
ALTER TABLE "new_Complex" RENAME TO "Complex";
CREATE UNIQUE INDEX "Complex_complexnaam_key" ON "Complex"("complexnaam");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
