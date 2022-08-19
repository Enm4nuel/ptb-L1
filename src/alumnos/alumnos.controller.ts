import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { AlumnosDto } from './dto/alumno.dto';

import { AlumnoService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController {

    constructor(private alumnoService: AlumnoService) {}

    @Post('create')
    async createAlumno(@Res() res, @Body() alumnosDto: AlumnosDto) {
        try {
            const alumno = await this.alumnoService.createAlumnos(alumnosDto);
            return res.status(HttpStatus.OK).json(alumno);
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
    async readAlumnos(@Res() res) {
        try {
            const alumno = await this.alumnoService.readAlumnos();
            return res.status(HttpStatus.OK).json(alumno);
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

    @Get(':alumnoID')
    async readAlumnoID(@Res() res, @Param('alumnoID') alumnoID) {
        try {
            const alumno = await this.alumnoService.readAlumnoID(alumnoID);
            return res.status(HttpStatus.OK).json(alumno);
        }
        catch (error) {
            var msg = `
            "El alumno no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Delete('delete/:alumnoID')
    async deleteAlumno(@Res() res, @Param('alumnoID') alumnoID) {
        try {
            const alumno = await this.alumnoService.deleteAlumnos(alumnoID);
            return res.status(HttpStatus.OK).json(alumno);
        }
        catch (error) {
            var msg = `
            "El alumno no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Put('update/:alumnoID')
    async updateAlumnos(@Res() res, @Param('alumnoID') alumnoID, @Body() alumnosDto: AlumnosDto) {
        try {
            const alumno = await this.alumnoService.updateAlumnos(alumnoID, alumnosDto);
            return res.status(HttpStatus.OK).json(alumno);
        }
        catch (error) {
            var msg = `
            "El alumno no existe"
            -------------------------
            Descripcion del problema:
            
            ${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }


}