import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { AulaDto } from './dto/aula.dto';

import { AulaService } from './aulas.service';

@Controller('aulas')
export class AulasController {

    constructor(private aulaService: AulaService) {}

    @Post('create')
    async createAula(@Res() res, @Body() aulaDto: AulaDto) {
        try {
            const aula = await this.aulaService.createAulas(aulaDto);
            return res.status(HttpStatus.OK).json(aula);
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
    async readAulas(@Res() res) {
        try {
            const aulas = await this.aulaService.readAulas();
            return res.status(HttpStatus.OK).json(aulas);
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

    @Get(':aulaID')
    async readAulaID(@Res() res, @Param('aulaID') aulaID) {
        try {
            const aula = await this.aulaService.readAulaID(aulaID);
            return res.status(HttpStatus.OK).json(aula);
        }
        catch (error) {
            var msg = `
            "El aula no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Delete('delete/:aulaID')
    async deleteAula(@Res() res, @Param('aulaID') aulaID) {
        try {
            const aula = await this.aulaService.deleteAulas(aulaID);
            return res.status(HttpStatus.OK).json(aula);
        }
        catch (error) {
            var msg = `
            "El aula no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Put('update/:aulaID')
    async updateAlumnos(@Res() res, @Param('alumnoID') aulaID, @Body() aulaDto: AulaDto) {
        try {
            const aula = await this.aulaService.updateAulas(aulaID, aulaDto);
            return res.status(HttpStatus.OK).json({aula});
        }
        catch (error) {
            var msg = `
            "El aula no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

}