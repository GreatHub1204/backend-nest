import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AnalysisModule } from './analysis/analysis.module';

@Module({
  imports: [TodoModule, AnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
