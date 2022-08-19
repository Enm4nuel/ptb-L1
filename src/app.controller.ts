import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {

    infoContactos = {
        "Telegram": "@CesarTK",
        "GitHub": "Enm4nuel"
    }

  @Get('')
  @ApiOkResponse({ description: "Conectado a la api correctamente "})
  async showInfoGeneral(@Res() res) {
      return res.status(HttpStatus.OK).json(this.infoContactos);
  }

}
