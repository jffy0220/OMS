import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTypeController } from './order_type.controller';
import { Order_Type } from './order_type.entity';
import { OrderTypeService } from './order_type.service';

@Module({
    imports: [TypeOrmModule.forFeature([Order_Type])],
    providers: [OrderTypeService],
    controllers: [OrderTypeController]
})
export class OrderTypeModule {
    
}
