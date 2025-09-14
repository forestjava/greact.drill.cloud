import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { CurrentModule } from './current/current.module';

@Module({
  imports: [HistoryModule, CurrentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
