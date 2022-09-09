import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnTypeController } from './return_type.controller';
import { ReturnType } from './return_type.entity';
import { ReturnTypeService } from './return_type.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReturnType])],
    providers: [ReturnTypeService],
    controllers: [ReturnTypeController]
})
export class ReturnTypeModule {}
