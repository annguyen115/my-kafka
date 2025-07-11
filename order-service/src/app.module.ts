import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './modules/kafka/kafka.module';
import { OrderController } from './modules/order/order.controller';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [KafkaModule, OrderModule],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
