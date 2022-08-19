import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { ProfesorDto } from './dto/profesor.dto';

import { ProfesoresService } from './profesores.service';


@Controller('profesores')
export class ProfesoresController {

    constructor(private profesoresService: ProfesoresService) {}

    @Post('create')
    async createProfesor(@Res() res, @Body() profesorDto: ProfesorDto) {
        try {
            const profesor = await this.profesoresService.createProfesor(profesorDto);
            return res.status(HttpStatus.OK).json(profesor);
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
            const profesores = await this.profesoresService.readProfesores();
            return res.status(HttpStatus.OK).json(profesores);
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

    @Get(':profesorID')
    async readProfesorID(@Res() res, @Param('profesorID') profesorID) {
        try {
            const profesor = await this.profesoresService.readProfesorID(profesorID);
            return res.status(HttpStatus.OK).json(profesor);
        }
        catch (error) {
            var msg = `
            "El profesor no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Delete('delete/:profesorID')
    async deleteProfesor(@Res() res, @Param('profesorID') profesorID) {
        try {
            const profesor = await this.profesoresService.deleteProfesor(profesorID);
            return res.status(HttpStatus.OK).json(profesor);
        }
        catch (error) {
            var msg = `
            "El profesor no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Put('update/:profesorID')
    async updateProfesor(@Res() res, @Param('profesorID') profesorID, @Body() profesorDto: ProfesorDto) {
        try {
            const profesor = await this.profesoresService.updateProfesor(profesorID, profesorDto);
            return res.status(HttpStatus.OK).json({profesor});
        }
        catch (error) {
            var msg = `
            "El profesor no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

}