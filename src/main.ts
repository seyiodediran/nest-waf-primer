import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


//Let's make it a NestExpressApplication
import {NestExpressApplication} from '@nestjs/platform-express';

//We need JOIN to synthesize the directory path which will contain templates
import {join} from 'path';

//We need nunjucks as render engine
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,);

  //To associate nunjucks with express, we need to get the underlying express platform from nest
  const express = app.getHttpAdapter().getInstance();

  //we also need to get the directory name views (create it in project root directory), 
  //which is the root directory for our template files
  const views = join(__dirname, '..', 'views');

  //configure nunjucks, setting views and express declared above
  nunjucks.configure(views, {express});

  //we need to get directory name static
  const staticAssets = join(__dirname, '..', '/static');
  app.useStaticAssets(staticAssets);

  //start the application
  await app.listen(5000);
}
bootstrap();  
