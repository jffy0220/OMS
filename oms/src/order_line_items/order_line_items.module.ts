import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderLineItem } from './order_line_item.entity';
import { OrderLineItemsController } from './order_line_items.controller';
import { OrderLineItemsService } from './order_line_items.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderLineItem])],
    providers: [OrderLineItemsService],
    controllers: [OrderLineItemsController]
})
export class OrderLineItemsModule {}
