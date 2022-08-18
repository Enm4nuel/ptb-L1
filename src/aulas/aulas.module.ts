import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AulasController } from './aulas.controller';
import { AulaService } from './aulas.service';
import { AulaSchema } from './schemas/aula.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Aulas', schema: AulaSchema}
        ])
    ],
    controllers: [AulasController],
    providers: [AulaService],
})
export class AulasModule {}
