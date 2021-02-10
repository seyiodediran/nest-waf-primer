import { Controller, Get, Render } from '@nestjs/common';
import { using } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  //Http Get route named hello2
  @Get('hello2')
  @Render('index.html')
  gethello2():{} {
    return this.appService.gethello2();
  }

  //Http Get route named Home
  @Get('/')
  @Render('home.html')
  getHome(): {} {
    return this.appService.getHome();
  }

  //Http Get route name about-us
  @Get('about-us')
  @Render('about-us.html')
  getAboutUs() : {} {
    return this.appService.getAboutUs();
  }
}

