import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParamsModule } from './params/params.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [ParamsModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
