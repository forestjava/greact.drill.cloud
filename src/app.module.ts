import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { CurrentModule } from './current/current.module';
import { IngestModule } from './ingest/ingest.module';

@Module({
  imports: [HistoryModule, CurrentModule, IngestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
