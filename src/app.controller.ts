import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

    infoContactos = {
        "Telegram": "@CesarTK",
        "GitHub": "Enm4nuel"
    }

  @Get('')
  async showInfoGeneral(@Res() res) {
      return res.status(HttpStatus.OK).json(this.infoContactos);
  }

}
