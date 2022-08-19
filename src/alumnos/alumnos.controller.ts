import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { AlumnosDto } from './dto/alumno.dto';

import { AlumnoService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController {

    constructor(private alumnoService: AlumnoService) {}

    @Post('create')
    async createAlumno(@Res() res, @Body() alumnosDto: AlumnosDto) {
        const alumno = await this.alumnoService.createAlumnos(alumnosDto);
        return res.status(HttpStatus.OK).json(alumno);
    }

    @Get('')
    async readAlumnos(@Res() res) {
        const alumno = await this.alumnoService.readAlumnos();
        return res.status(HttpStatus.OK).json(alumno);
    }

    @Get(':alumnoID')
    async readAlumnoID(@Res() res, @Param('alumnoID') alumnoID) {
        const alumno = await this.alumnoService.readAlumnoID(alumnoID);
        if (!alumnoID) throw new NotFoundException('El alumno no existe');
        return res.status(HttpStatus.OK).json(alumno);
    }

    @Get(':alumnoName')
    async readAlumnoName(@Res() res, @Param('alumnoName') alumnoName) {
        const alumno = await this.alumnoService.readAlumnoName(alumnoName);
        if (!alumnoName) throw new NotFoundException('El alumno no existe');
        return res.status(HttpStatus.OK).json(alumno);
    }

    @Delete('delete/:alumnoID')
    async deleteAlumno(@Res() res, @Param('alumnoID') alumnoID) {
        const alumno = await this.alumnoService.deleteAlumnos(alumnoID);
        if (!alumnoID) throw new NotFoundException('El alumno no existe');
        return res.status(HttpStatus.OK).json(alumno);
    }

    @Put('update/:alumnoID')
    async updateAlumnos(@Res() res, @Param('alumnoID') alumnoID, @Body() alumnosDto: AlumnosDto) {
        const alumno = await this.alumnoService.updateAlumnos(alumnoID, alumnosDto);
        if (!alumnoID) throw new NotFoundException('El alumno no existe');
        return res.status(HttpStatus.OK).json({
            alumno
        });
    }


}