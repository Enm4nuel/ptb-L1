import { Module } from '@nestjs/common';
import { AlumnoService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnoSchema } from './schemas/alumno.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name: 'Alumnos', schema: AlumnoSchema}
    ])
],
controllers: [AlumnosController],
providers: [AlumnoService],
})
export class AlumnosModule {}
