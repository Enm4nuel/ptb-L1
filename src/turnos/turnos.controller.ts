import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { TurnoDto } from './dto/turno.dto';

import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {

    constructor(private turnosService: TurnosService) {}

    @Post('create')
    async createTurno(@Res() res, @Body() turnoDto: TurnoDto) {
        const turno = await this.turnosService.createTurno(turnoDto);
        if (!turno) throw new NotFoundException('Un solo docente por turno');
        return res.status(HttpStatus.OK).json(turno);
    }

    @Get('')
    async readTurnos(@Res() res) {
        const turnos = await this.turnosService.readTurnos();
        console.log("Todos los turnos");
        return res.status(HttpStatus.OK).json(turnos);
    }

    @Get(':turnoID')
    async readTurnoID(@Res() res, @Param('turnoID') turnoID) {
        const turno = await this.turnosService.readTurnoID(turnoID);
        if (!turno) throw new NotFoundException('El turno no existe');
        return res.status(HttpStatus.OK).json(turno);
    }

    @Delete('delete/:turnoID')
    async deleteTurno(@Res() res, @Param('turnoID') turnoID) {
        const turno = await this.turnosService.deleteTurno(turnoID);
        if (!turnoID) throw new NotFoundException('El turno no existe');
        return res.status(HttpStatus.OK).json(turno);
    }

    @Put('update/:turnoID')
    async updateTurno(@Res() res, @Param('turnoID') turnoID, @Body() turnoDto: TurnoDto) {
        const turno = await this.turnosService.updateTurno(turnoID, turnoDto);
        if (!turnoID) throw new NotFoundException('El turno no existe');
        return res.status(HttpStatus.OK).json({
            turno
        });
    }

}