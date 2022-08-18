import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { AulaDto } from './dto/aula.dto';

import { AulaService } from './aulas.service';

@Controller('aulas')
export class AulasController {

    constructor(private aulaService: AulaService) {}

    @Post('create')
    async createAula(@Res() res, @Body() aulaDto: AulaDto) {
        const aula = await this.aulaService.createAulas(aulaDto);
        return res.status(HttpStatus.OK).json(aula);
    }

    @Get('')
    async readAulas(@Res() res) {
        const aulas = await this.aulaService.readAulas();
        return res.status(HttpStatus.OK).json(aulas);
    }

    @Get(':aulaID')
    async readAulaID(@Res() res, @Param('aulaID') aulaID) {
        const aula = await this.aulaService.readAulaID(aulaID);
        if (!aula) throw new NotFoundException('El aula no existe');
        return res.status(HttpStatus.OK).json(aula);
    }

    @Delete('delete/:aulaID')
    async deleteAula(@Res() res, @Param('aulaID') aulaID) {
        const aula = await this.aulaService.deleteAulas(aulaID);
        if (!aulaID) throw new NotFoundException('El aula no existe');
        return res.status(HttpStatus.OK).json(aula);
    }

    @Put('update/:aulaID')
    async updateAlumnos(@Res() res, @Param('alumnoID') aulaID, @Body() aulaDto: AulaDto) {
        const aula = await this.aulaService.updateAulas(aulaID, aulaDto);
        if (!aulaID) throw new NotFoundException('El aula no existe');
        return res.status(HttpStatus.OK).json({
            aula
        });
    }

}