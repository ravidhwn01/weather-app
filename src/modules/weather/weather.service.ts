import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';

@Injectable()
export class WeatherService {
  async findAll() {
    const apiUrl =
      'https://api.openweathermap.org/data/2.5/weather?q=india&appid=82658d04e2d386013ee62c8b9e221677';
    const response = await axios.get(apiUrl);
    return response.data;
  }
}
