import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { TurnoDto } from './dto/turno.dto';

import { TurnosService } from './turnos.service';

@ApiTags('Turnos')
@Controller('turnos')
export class TurnosController {

    constructor(private turnosService: TurnosService) {}

    @Post('create')
    @ApiBody({type: TurnoDto})
    @ApiCreatedResponse({description: 'Agregar Turno'})
    @ApiOkResponse({description: "Turno creado correctamente"})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async createTurno(@Res() res, @Body() turnoDto: TurnoDto) {
        try {
            const turno = await this.turnosService.createTurno(turnoDto);
            return res.status(HttpStatus.OK).json(turno);
        }
        catch (error) {
            var msg = `
            "Ha habido un problema"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Get('')
    @ApiBody({type: TurnoDto})
    @ApiOkResponse({description: 'Obtener turnos'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async readTurnos(@Res() res) {
        try {
            const turnos = await this.turnosService.readTurnos();
            return res.status(HttpStatus.OK).json(turnos);
        }
        catch (error) {
            var msg = `
            "Ha habido un problema"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Get(':turnoID')
    @ApiBody({type: TurnoDto})
    @ApiParam({type: 'string', name: 'turnoID', description: "ID del turno que se quiere encontrar"})
    @ApiOkResponse({description: 'Obtener un turno especifico'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async readTurnoID(@Res() res, @Param('turnoID') turnoID) {
        try {
            const turno = await this.turnosService.readTurnoID(turnoID);
            return res.status(HttpStatus.OK).json(turno);
        }
        catch (error) {
            var msg = `
            "El turno no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Delete('delete/:turnoID')
    @ApiBody({type: TurnoDto})
    @ApiParam({type: 'string', name: 'turnoID', description: "ID del turno que se quiere eliminar"})
    @ApiOkResponse({description: 'Turno eliminado'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async deleteTurno(@Res() res, @Param('turnoID') turnoID) {
        try {
            const turno = await this.turnosService.deleteTurno(turnoID);
            return res.status(HttpStatus.OK).json(turno);
        }
        catch (error) {
            var msg = `
            "El turno no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Put('update/:turnoID')
    @ApiBody({type: TurnoDto})
    @ApiParam({type: 'string', name: 'turnoID', description: "ID del turno que se quiere modificar"})
    @ApiOkResponse({description: 'Turno modificado'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async updateTurno(@Res() res, @Param('turnoID') turnoID, @Body() turnoDto: TurnoDto) {
        try {
            const turno = await this.turnosService.updateTurno(turnoID, turnoDto);
            return res.status(HttpStatus.OK).json({turno});
        }
        catch (error) {
            var msg = `
            "El turno no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

}