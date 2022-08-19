import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Alumnos } from './interfaces/alumno.interface';
import { AlumnosDto } from './dto/alumno.dto'; 

@Injectable()
export class AlumnoService {

    constructor(@InjectModel('Alumnos') private alumnoModel: Model<Alumnos>) {}

    // Obtener alumnos
    async readAlumnos(): Promise<Alumnos[]> {
        const alumno = await this.alumnoModel.find();
        return alumno;
    }

    // Obtener un solo alumno por ID
    async readAlumnoID(alumnoID: string): Promise<Alumnos> {
        const alumno = await this.alumnoModel.findById(alumnoID);
        return alumno;
    }

    // Crear alumnos
    async createAlumnos(alumnosDto: AlumnosDto): Promise<Alumnos> {
        const alumno = new this.alumnoModel(alumnosDto);
        return await alumno.save();
    }

    // Eliminar alumnos
    async deleteAlumnos(alumnoID: string): Promise<Alumnos> {
        const alumno = await this.alumnoModel.findByIdAndDelete(alumnoID);
        return alumno;
    }

    // Actualizar alumnos
    async updateAlumnos(alumnoID: string, alumnoDto: AlumnosDto): Promise<Alumnos> {
        const alumno = await this.alumnoModel.findByIdAndUpdate(alumnoID, alumnoDto, {new: true})
        return alumno;
    }

}