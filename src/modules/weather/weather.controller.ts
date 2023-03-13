import { Body, Controller, Get, Post} from '@nestjs/common';
import { WeatherService } from './weather.service';


@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  findAll(@Body() body:any) {
    return this.weatherService.findAll(body.city);
  }

  
}
