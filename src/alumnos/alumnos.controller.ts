import { Controller, Post, Get, Delete, Res, HttpStatus, Body, Param, NotFoundException, Put } from '@nestjs/common';

import { AlumnosDto } from './dto/alumno.dto';

import { AlumnoService } from './alumnos.service';
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Alumnos')
@Controller('alumnos')
export class AlumnosController {

    constructor(private alumnoService: AlumnoService) {}

    @Post('')
    @ApiBody({type: AlumnosDto})
    @ApiCreatedResponse({description: 'Agregar Alumno'})
    @ApiOkResponse({description: "Alumno creado correctamente"})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})
    
    async createAlumno(@Res() res, @Body() alumnosDto: AlumnosDto) {
        try {
            const alumno = await this.alumnoService.createAlumnos(alumnosDto);
            return res.status(HttpStatus.OK).json(alumno);
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
    @ApiBody({type: AlumnosDto})
    @ApiOkResponse({description: 'Obtener Alumnos'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async readAlumnos(@Res() res) {
        try {
            const alumno = await this.alumnoService.readAlumnos();
            return res.status(HttpStatus.OK).json(alumno);
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

    @Get(':alumnoID')
    @ApiBody({type: AlumnosDto})
    @ApiParam({type: 'string', name: 'alumnoID', description: "ID del alumno que se quiere encontrar"})
    @ApiOkResponse({description: 'Obtener un Alumno especifico'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async readAlumnoID(@Res() res, @Param('alumnoID') alumnoID) {
        try {
            const alumno = await this.alumnoService.readAlumnoID(alumnoID);
            return res.status(HttpStatus.OK).json(alumno);
        }
        catch (error) {
            var msg = `
            "El alumno no existe"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Delete(':alumnoID')
    @ApiBody({type: AlumnosDto})
    @ApiParam({type: 'string', name: 'alumnoID', description: "ID del alumno que se quiere eliminar"})
    @ApiOkResponse({description: 'Alumno eliminado'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async deleteAlumno(@Res() res, @Param('alumnoID') alumnoID) {
        try {
            const alumno = await this.alumnoService.deleteAlumnos(alumnoID);
            return res.status(HttpStatus.OK).json(alumno);
        }
        catch (error) {
            var msg = `
            "El alumno no existe"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }

    @Put(':alumnoID')
    @ApiBody({type: AlumnosDto})
    @ApiParam({type: 'string', name: 'alumnoID', description: "ID del alumno que se quiere modificar"})
    @ApiOkResponse({description: 'Alumno modificado'})
    @ApiInternalServerErrorResponse({description: 'Ha ocurrido un problema interno con el servidor'})

    async updateAlumnos(@Res() res, @Param('alumnoID') alumnoID, @Body() alumnosDto: AlumnosDto) {
        try {
            const alumno = await this.alumnoService.updateAlumnos(alumnoID, alumnosDto);
            return res.status(HttpStatus.OK).json(alumno);
        }
        catch (error) {
            var msg = `
            "El alumno no existe"
            \n-------------------------
            \nDescripcion del problema:
            \n
            \n${error}`;
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(msg);
        }
    }


}