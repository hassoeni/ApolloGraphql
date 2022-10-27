/*
  Warnings:

  - Added the required column `complexnummer` to the `Complex` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Complex" (
    "complexid" TEXT NOT NULL PRIMARY KEY,
    "complexnummer" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "complexnaam" TEXT NOT NULL,
    "gbo" INTEGER NOT NULL,
    "marktwaarde" INTEGER NOT NULL,
    "huur" INTEGER NOT NULL,
    "streefhuur" INTEGER NOT NULL,
    "Gemiddeld_PO" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Complex_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Complex" ("Gemiddeld_PO", "complexid", "complexnaam", "createdAt", "gbo", "huur", "marktwaarde", "streefhuur", "updatedAt", "userId") SELECT "Gemiddeld_PO", "complexid", "complexnaam", "createdAt", "gbo", "huur", "marktwaarde", "streefhuur", "updatedAt", "userId" FROM "Complex";
DROP TABLE "Complex";
ALTER TABLE "new_Complex" RENAME TO "Complex";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
