-- CreateTable
CREATE TABLE "PorfileImage" (
    "imageId" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "imageExtension" TEXT NOT NULL,
    "imageSize" DOUBLE PRECISION NOT NULL,
    "imageStoredName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PorfileImage_pkey" PRIMARY KEY ("imageId")
);

-- AddForeignKey
ALTER TABLE "PorfileImage" ADD CONSTRAINT "PorfileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
