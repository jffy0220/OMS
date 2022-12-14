import { Controller, Body, Get, Param, Post, Put } from '@nestjs/common';
import { PurchaseOrder } from './purchase-order.entity';
import { PurchaseOrderService } from './purchase-order.service';

@Controller('purchase-order')
export class PurchaseOrderController {
    constructor(private purchaseOrderService: PurchaseOrderService) {}

    @Get()
    async findAll(): Promise<PurchaseOrder[]> {
        return this.purchaseOrderService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<PurchaseOrder> {
        return this.purchaseOrderService.findOne(id);
    }

    @Post()
    create(@Body() purchaseOrder: PurchaseOrder) {
        return this.purchaseOrderService.create(purchaseOrder);
    }

    @Put()
    update(@Body() purchaseOrder: PurchaseOrder) {
        return this.purchaseOrderService.update(purchaseOrder);
    }
}
