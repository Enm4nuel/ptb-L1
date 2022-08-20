import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TurnoSchema } from './schemas/turno.schema';
import { TurnosController } from './turnos.controller';
import { TurnosService } from './turnos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Turnos', schema: TurnoSchema }]),
  ],
  controllers: [TurnosController],
  providers: [TurnosService],
})
export class TurnosModule {}
