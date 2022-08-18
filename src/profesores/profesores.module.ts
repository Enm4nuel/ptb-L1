import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesoresController } from './profesores.controller';
import { ProfesoresService } from './profesores.service';
import { ProfesorSchema } from './schemas/profesor.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Profesores', schema: ProfesorSchema}
        ])
    ],
    controllers: [ProfesoresController],
    providers: [ProfesoresService]
})
export class ProfesoresModule {}
