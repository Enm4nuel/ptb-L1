import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { TurnoDto } from './dto/turno.dto';

import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {

    constructor(private turnosService: TurnosService) {}

    @Post('create')
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