/*
  Warnings:

  - A unique constraint covering the columns `[imageStoredName]` on the table `ProfileImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProfileImage_imageStoredName_key" ON "ProfileImage"("imageStoredName");
