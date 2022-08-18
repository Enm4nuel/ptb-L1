import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { ProfesorDto } from './dto/profesor.dto';

import { ProfesoresService } from './profesores.service';

@Controller('profesores')
export class ProfesoresController {

    constructor(private profesoresService: ProfesoresService) {}

    @Post('create')
    async createProfesor(@Res() res, @Body() profesorDto: ProfesorDto) {
        const profesor = await this.profesoresService.createProfesor(profesorDto);
        return res.status(HttpStatus.OK).json(profesor);
    }

    @Get('')
    async readAulas(@Res() res) {
        const profesores = await this.profesoresService.readProfesores();
        return res.status(HttpStatus.OK).json(profesores);
    }

    @Get(':profesorID')
    async readProfesorID(@Res() res, @Param('profesorID') profesorID) {
        const profesor = await this.profesoresService.readProfesorID(profesorID);
        if (!profesor) throw new NotFoundException('El profesor no existe');
        return res.status(HttpStatus.OK).json(profesor);
    }

    @Delete('delete/:profesorID')
    async deleteProfesor(@Res() res, @Param('profesorID') profesorID) {
        const profesor = await this.profesoresService.deleteProfesor(profesorID);
        if (!profesorID) throw new NotFoundException('El profesor no existe');
        return res.status(HttpStatus.OK).json(profesor);
    }

    @Put('update/:profesorID')
    async updateProfesor(@Res() res, @Param('profesorID') profesorID, @Body() profesorDto: ProfesorDto) {
        const profesor = await this.profesoresService.updateProfesor(profesorID, profesorDto);
        if (!profesorID) throw new NotFoundException('El profesor no existe');
        return res.status(HttpStatus.OK).json({
            profesor
        });
    }

}