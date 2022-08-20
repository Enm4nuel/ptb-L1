import {
  Controller,
  Post,
  Get,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { ProfesorDto } from './dto/profesor.dto';

import { ProfesoresService } from './profesores.service';

@ApiTags('Profesores')
@Controller('profesores')
export class ProfesoresController {
  constructor(private profesoresService: ProfesoresService) {}

  @Post('')
  @ApiBody({ type: ProfesorDto })
  @ApiCreatedResponse({ description: 'Agregar Profesor' })
  @ApiOkResponse({ description: 'profesor creado correctamente' })
  @ApiInternalServerErrorResponse({
    description: 'Ha ocurrido un problema interno con el servidor',
  })
  async createProfesor(@Res() res, @Body() profesorDto: ProfesorDto) {
    try {
      const profesor = await this.profesoresService.createProfesor(profesorDto);
      return res.status(HttpStatus.OK).json(profesor);
    } catch (error) {
      var msg = `
            "Ha habido un problema"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
    }
  }

  @Get('')
  @ApiBody({ type: ProfesorDto })
  @ApiOkResponse({ description: 'Obtener Profesor' })
  @ApiInternalServerErrorResponse({
    description: 'Ha ocurrido un problema interno con el servidor',
  })
  async readAulas(@Res() res) {
    try {
      const profesores = await this.profesoresService.readProfesores();
      return res.status(HttpStatus.OK).json(profesores);
    } catch (error) {
      var msg = `
            "Ha habido un problema"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
    }
  }

  @Get(':profesorID')
  @ApiBody({ type: ProfesorDto })
  @ApiParam({
    type: 'string',
    name: 'profesorID',
    description: 'ID del profesor que se quiere encontrar',
  })
  @ApiOkResponse({ description: 'Obtener un Profesor especifico' })
  @ApiInternalServerErrorResponse({
    description: 'Ha ocurrido un problema interno con el servidor',
  })
  async readProfesorID(@Res() res, @Param('profesorID') profesorID) {
    try {
      const profesor = await this.profesoresService.readProfesorID(profesorID);
      return res.status(HttpStatus.OK).json(profesor);
    } catch (error) {
      var msg = `
            "El profesor no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
    }
  }

  @Delete(':profesorID')
  @ApiBody({ type: ProfesorDto })
  @ApiParam({
    type: 'string',
    name: 'profesorID',
    description: 'ID del profesor que se quiere eliminar',
  })
  @ApiOkResponse({ description: 'Profesor eliminado' })
  @ApiInternalServerErrorResponse({
    description: 'Ha ocurrido un problema interno con el servidor',
  })
  async deleteProfesor(@Res() res, @Param('profesorID') profesorID) {
    try {
      const profesor = await this.profesoresService.deleteProfesor(profesorID);
      return res.status(HttpStatus.OK).json(profesor);
    } catch (error) {
      var msg = `
            "El profesor no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
    }
  }

  @Put(':profesorID')
  @ApiBody({ type: ProfesorDto })
  @ApiParam({
    type: 'string',
    name: 'profesorID',
    description: 'ID del profesor que se quiere modificar',
  })
  @ApiOkResponse({ description: 'Profesor modificado' })
  @ApiInternalServerErrorResponse({
    description: 'Ha ocurrido un problema interno con el servidor',
  })
  async updateProfesor(
    @Res() res,
    @Param('profesorID') profesorID,
    @Body() profesorDto: ProfesorDto,
  ) {
    try {
      const profesor = await this.profesoresService.updateProfesor(
        profesorID,
        profesorDto,
      );
      return res.status(HttpStatus.OK).json({ profesor });
    } catch (error) {
      var msg = `
            "El profesor no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
    }
  }
}
