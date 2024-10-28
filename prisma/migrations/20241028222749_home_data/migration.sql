-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "sid" BIGINT NOT NULL,
    "userId" INTEGER NOT NULL,
    "billingDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "dateIssuance" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "duty" DECIMAL(65,30) NOT NULL,
    "money" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "segment" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDetail" (
    "id" SERIAL NOT NULL,
    "planId" INTEGER NOT NULL,

    CONSTRAINT "PlanDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propertie" (
    "id" SERIAL NOT NULL,
    "module" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Propertie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_sid_key" ON "Product"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "Billing_productId_key" ON "Billing"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_productId_key" ON "Plan"("productId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDetail" ADD CONSTRAINT "PlanDetail_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
