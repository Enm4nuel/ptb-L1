import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Turnos } from './interfaces/turno.interface';
import { TurnoDto } from './dto/turno.dto';

@Injectable()
export class TurnosService {
  constructor(@InjectModel('Turnos') private turnoModel: Model<Turnos>) {}

  // Obtener turnos
  async readTurnos(): Promise<Turnos[]> {
    const turno = await this.turnoModel.find();
    return turno;
  }

  // Obtener turno por ID
  async readTurnoID(turnoID: string): Promise<Turnos> {
    const turno = await this.turnoModel.findById(turnoID);
    return turno;
  }

  // Crear turno
  async createTurno(turnoDto: TurnoDto): Promise<Turnos> {
    const turno = new this.turnoModel(turnoDto);
    return await turno.save();
  }

  // Eliminar turno
  async deleteTurno(turnoID: string): Promise<Turnos> {
    const turno = await this.turnoModel.findByIdAndDelete(turnoID);
    return turno;
  }

  // Actualizar turno
  async updateTurno(turnoID: string, turnoDto: TurnoDto): Promise<Turnos> {
    const turno = await this.turnoModel.findByIdAndUpdate(turnoID, turnoDto, {
      new: true,
    });
    return turno;
  }
}
