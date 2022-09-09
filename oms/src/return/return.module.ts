import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnController } from './return.controller';
import { Return } from './return.entity';
import { ReturnService } from './return.service';

@Module({
    imports: [TypeOrmModule.forFeature([Return])],
    providers: [ReturnService],
    controllers: [ReturnController]
})
export class ReturnModule {}
