import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegisterationModule } from './student-registeration/student-registeration.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StudentRegisterationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
