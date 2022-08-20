import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { AulaDto } from './dto/aula.dto';

import { AulaService } from './aulas.service';
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Aulas')
@Controller('aulas')
export class AulasController {

    constructor(private aulaService: AulaService) {}

    @Post('')
    @ApiBody({type: AulaDto})
    @ApiCreatedResponse({description: 'Agregar aula'})
    @ApiOkResponse({description: "Aula creada correctamente"})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})
    
    async createAula(@Res() res, @Body() aulaDto: AulaDto) {
        try {
            const aula = await this.aulaService.createAulas(aulaDto);
            return res.status(HttpStatus.OK).json(aula);
        }
        catch (error) {
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
    @ApiBody({type: AulaDto})
    @ApiOkResponse({description: 'Obtener aulas'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async readAulas(@Res() res) {
        try {
            const aulas = await this.aulaService.readAulas();
            return res.status(HttpStatus.OK).json(aulas);
        }
        catch (error) {
            var msg = `
            "Ha habido un problema"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Get(':aulaID')
    @ApiBody({type: AulaDto})
    @ApiParam({type: 'string', name: 'aulaID', description: "ID del aula que se quiere encontrar"})
    @ApiOkResponse({description: 'Obtener un aula especifica'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async readAulaID(@Res() res, @Param('aulaID') aulaID) {
        try {
            const aula = await this.aulaService.readAulaID(aulaID);
            return res.status(HttpStatus.OK).json(aula);
        }
        catch (error) {
            var msg = `
            "El aula no existe"
            \n -------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Delete(':aulaID')
    @ApiBody({type: AulaDto})
    @ApiParam({type: 'string', name: 'aulaID', description: "ID del aula que se quiere eliminar"})
    @ApiOkResponse({description: 'Aula eliminada'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async deleteAula(@Res() res, @Param('aulaID') aulaID) {
        try {
            const aula = await this.aulaService.deleteAulas(aulaID);
            return res.status(HttpStatus.OK).json(aula);
        }
        catch (error) {
            var msg = `
            "El aula no existe"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Put(':aulaID')
    @ApiBody({type: AulaDto})
    @ApiParam({type: 'string', name: 'aulaID', description: "ID del aula que se quiere modificar"})
    @ApiOkResponse({description: 'Aula modificado'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async updateAlumnos(@Res() res, @Param('alumnoID') aulaID, @Body() aulaDto: AulaDto) {
        try {
            const aula = await this.aulaService.updateAulas(aulaID, aulaDto);
            return res.status(HttpStatus.OK).json({aula});
        }
        catch (error) {
            var msg = `
            "El aula no existe"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

}