-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "run" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,
    "address" TEXT,
    "city" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_run_key" ON "User"("run");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
