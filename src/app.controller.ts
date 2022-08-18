import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  infoPeticiones = {
    "productos": {
        "post": "/products/create",
        "get": "/products/",
        "getID": "/products/:ID",
        "delete": "/products/delete/:ID",
        "put": "/products/update/:ID"
    },
    "usuarios": {
        "post": "/user/create",
        "get": "/user/",
        "getID": "/user/:ID",
        "delete": "/user/delete/:ID",
    },
    "ordenes o pedidos": {
        "post": "/orders/create",
        "get": "/orders/",
        "getID": "/orders/:ID",
        "delete": "/orders/delete/:ID",
    },
    "quejas": {
        "post": "/complaints/create",
        "get": "/complaints/",
        "getID": "/complaints/:ID",
        "delete": "/complaints/delete/:ID",
    }
};

infoGeneral = {
    "Informaciones de la API": {
        "1": {"informacion para peticiones": "/info"},
        "2": {"informacion para contactos": "/contactos"} 
    }
};

infoContactos = {
    "Telegram": "@CesarTK",
    "GitHub": "Enm4nuel"
}

  @Get('')
  async showInfoGeneral(@Res() res) {
      return res.status(HttpStatus.OK).json(this.infoContactos);
  }

  @Get('info')
  async showInfoPeticiones(@Res() res) {
      return res.status(HttpStatus.OK).json(this.infoPeticiones);
  }

  @Get('contactos')
  async showInfoContactos(@Res() res) {
      return res.status(HttpStatus.OK).json(this.infoContactos);
  }

}
