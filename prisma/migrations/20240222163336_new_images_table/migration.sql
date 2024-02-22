/*
  Warnings:

  - You are about to drop the `ProfileImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfileImage" DROP CONSTRAINT "ProfileImage_userId_fkey";

-- DropTable
DROP TABLE "ProfileImage";

-- CreateTable
CREATE TABLE "Images" (
    "imageId" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "imageExtension" TEXT NOT NULL,
    "imageSize" DOUBLE PRECISION NOT NULL,
    "imageStoredName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("imageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Images_imageStoredName_key" ON "Images"("imageStoredName");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
