import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { AddressController } from './address/address.controller';
import { AddressService } from './address/address.service';
import { AddressModule } from './address/address.module';
import { OrderTypeController } from './order_type/order_type.controller';
import { OrderTypeService } from './order_type/order_type.service';
import { OrderTypeModule } from './order_type/order_type.module';
import { OrderTypeStatusController } from './order_type_status/order_type_status.controller';
import { OrderTypeStatusService } from './order_type_status/order_type_status.service';
import { OrderTypeStatusModule } from './order_type_status/order_type_status.module';
import { Address } from './address/address.entity';
import { Order_Type } from './order_type/order_type.entity';
import { OrderTypeStatus } from './order_type_status/order_type_status.entity';
import { ReturnTypeController } from './return_type/return_type.controller';
import { ReturnTypeService } from './return_type/return_type.service';
import { ReturnTypeModule } from './return_type/return_type.module';
import { ReturnProcessProcedureController } from './return_process_procedure/return_process_procedure.controller';
import { ReturnProcessProcedureService } from './return_process_procedure/return_process_procedure.service';
import { ReturnProcessProcedureModule } from './return_process_procedure/return_process_procedure.module';
import { ReturnController } from './return/return.controller';
import { ReturnService } from './return/return.service';
import { ReturnModule } from './return/return.module';
import { ReturnType } from './return_type/return_type.entity';
import { ReturnProcessProcedure } from './return_process_procedure/return_process_procedure.entity';
import { Return } from './return/return.entity';
import { OrderLineItemsController } from './order_line_items/order_line_items.controller';
import { OrderLineItemsService } from './order_line_items/order_line_items.service';
import { OrderLineItemsModule } from './order_line_items/order_line_items.module';
import { OrderLineItem } from './order_line_items/order_line_item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'OMS',
      entities: [Order, Customer, Address, Order_Type, OrderTypeStatus, ReturnType, ReturnProcessProcedure, Return, OrderLineItem],
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
    OrderLineItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
