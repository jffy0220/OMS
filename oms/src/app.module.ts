import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { AddressModule } from './address/address.module';
import { OrderTypeModule } from './order_type/order_type.module';
import { OrderTypeStatusModule } from './order_type_status/order_type_status.module';
import { Address } from './address/address.entity';
import { Order_Type } from './order_type/order_type.entity';
import { OrderTypeStatus } from './order_type_status/order_type_status.entity';
import { ReturnTypeModule } from './return_type/return_type.module';
import { ReturnProcessProcedureModule } from './return_process_procedure/return_process_procedure.module';
import { ReturnModule } from './return/return.module';
import { ReturnType } from './return_type/return_type.entity';
import { ReturnProcessProcedure } from './return_process_procedure/return_process_procedure.entity';
import { Return } from './return/return.entity';
import { OrderLineItemsModule } from './order_line_items/order_line_items.module';
import { OrderLineItem } from './order_line_items/order_line_item.entity';
import { ReceiverModule } from './receiver/receiver.module';
import { Receiver } from './receiver/receiver.entity';
import { PurchaseOrder } from './purchase-order/purchase-order.entity';
import { PurchaseOrderLineItems } from './purchase-order-line-items/purchase-order-line-items.entity';
import { PurchaseOrderLineItemsModule } from './purchase-order-line-items/purchase-order-line-items.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'Lyte',
      entities: [Order, Customer, Address, Order_Type, OrderTypeStatus, ReturnType, ReturnProcessProcedure, Return, OrderLineItem, Receiver, PurchaseOrder, PurchaseOrderLineItems],
      synchronize: false,
      keepConnectionAlive: true
    }),
    OrderModule,
    CustomerModule,
    AddressModule,
    OrderTypeModule,
    OrderTypeStatusModule,
    ReturnTypeModule,
    ReturnProcessProcedureModule,
    ReturnModule,
    OrderLineItemsModule,
    ReceiverModule,
    PurchaseOrderLineItemsModule,
    PurchaseOrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
