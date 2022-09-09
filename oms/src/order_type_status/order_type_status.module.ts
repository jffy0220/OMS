import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTypeStatusController } from './order_type_status.controller';
import { OrderTypeStatus } from './order_type_status.entity';
import { OrderTypeStatusService } from './order_type_status.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderTypeStatus])],
    providers: [OrderTypeStatusService],
    controllers: [OrderTypeStatusController]
})
export class OrderTypeStatusModule {}
