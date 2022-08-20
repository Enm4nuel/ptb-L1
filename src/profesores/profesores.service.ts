import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Profesores } from './interfaces/profesor.interface';
import { ProfesorDto } from './dto/profesor.dto';

@Injectable()
export class ProfesoresService {
  constructor(
    @InjectModel('Profesores') private profesorModel: Model<Profesores>,
  ) {}

  // Obtener profesores
  async readProfesores(): Promise<Profesores[]> {
    const profesor = await this.profesorModel.find();
    return profesor;
  }

  // Obtener profesor por ID
  async readProfesorID(profesorID: string): Promise<Profesores> {
    const profesor = await this.profesorModel.findById(profesorID);
    return profesor;
  }

  // Crear profesor
  async createProfesor(profesorDto: ProfesorDto): Promise<Profesores> {
    const profesor = new this.profesorModel(profesorDto);
    return await profesor.save();
  }

  // Eliminar profesor
  async deleteProfesor(profesorID: string): Promise<Profesores> {
    const profesor = await this.profesorModel.findByIdAndDelete(profesorID);
    return profesor;
  }

  // Actualizar profesor
  async updateProfesor(
    profesorID: string,
    profesorDto: ProfesorDto,
  ): Promise<Profesores> {
    const profesor = await this.profesorModel.findByIdAndUpdate(
      profesorID,
      profesorDto,
      { new: true },
    );
    return profesor;
  }
}
