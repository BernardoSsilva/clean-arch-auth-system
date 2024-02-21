/*
  Warnings:

  - You are about to drop the `PorfileImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PorfileImage" DROP CONSTRAINT "PorfileImage_userId_fkey";

-- DropTable
DROP TABLE "PorfileImage";

-- CreateTable
CREATE TABLE "ProfileImage" (
    "imageId" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "imageExtension" TEXT NOT NULL,
    "imageSize" DOUBLE PRECISION NOT NULL,
    "imageStoredName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProfileImage_pkey" PRIMARY KEY ("imageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfileImage_userId_key" ON "ProfileImage"("userId");

-- AddForeignKey
ALTER TABLE "ProfileImage" ADD CONSTRAINT "ProfileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
