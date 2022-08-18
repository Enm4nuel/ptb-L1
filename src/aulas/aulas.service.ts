import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Aulas } from './interfaces/aula.interface';
import { AulaDto } from './dto/aula.dto';


@Injectable()
export class AulaService {

    constructor(@InjectModel('Aulas') private aulaModel: Model<Aulas>) {}

    // Obtener aulas
    async readAulas(): Promise<Aulas[]> {
        const aula = await this.aulaModel.find();
        return aula;
    }

    // Obtener una sola aula por ID
    async readAulaID(aulaID: string): Promise<Aulas> {
        const aula = await this.aulaModel.findById(aulaID);
        return aula;
    }

    // Obtener un solo alumno por nombre
   /* async readAlumnoName(alumnoName: string): Promise<Alumnos> {
        const alumno = await this.alumnoModel.find({nombre: alumnoName});
        return alumno;
    }*/

    // Crear aulas
    async createAulas(aulaDto: AulaDto): Promise<Aulas> {
        const aula = new this.aulaModel(aulaDto);
        return await aula.save();
    }

    // Eliminar aulas
    async deleteAulas(aulaID: string): Promise<Aulas> {
        const aula = await this.aulaModel.findByIdAndDelete(aulaID);
        return aula;
    }

    // Actualizar aulas
    async updateAulas(aulaID: string, aulaDto: AulaDto): Promise<Aulas> {
        const aula = await this.aulaModel.findByIdAndUpdate(aulaID, aulaDto, {new: true})
        return aula;
    }

}