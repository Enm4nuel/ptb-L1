import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesoresController } from './profesores.controller';
import { ProfesoresService } from './profesores.service';
import { ProfesorSchema } from './schemas/profesor.schema';
import { ValidacionesService } from './validaciones/validaciones.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Profesores', schema: ProfesorSchema}
        ])
    ],
    controllers: [ProfesoresController],
    providers: [ProfesoresService, ValidacionesService]
})
export class ProfesoresModule {}
