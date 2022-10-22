-- CreateTable
CREATE TABLE "Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "length" INTEGER NOT NULL,
    "modulesCount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "numberOfViews" INTEGER NOT NULL,
    "durationInSeconds" INTEGER NOT NULL
);
