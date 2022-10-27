/*
  Warnings:

  - The primary key for the `Complex` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `complexid` on the `Complex` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

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
    "userId" INTEGER,
    CONSTRAINT "Complex_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Complex" ("Gemiddeld_PO", "complexid", "complexnaam", "complexnummer", "createdAt", "gbo", "huur", "marktwaarde", "streefhuur", "updatedAt", "userId") SELECT "Gemiddeld_PO", "complexid", "complexnaam", "complexnummer", "createdAt", "gbo", "huur", "marktwaarde", "streefhuur", "updatedAt", "userId" FROM "Complex";
DROP TABLE "Complex";
ALTER TABLE "new_Complex" RENAME TO "Complex";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
