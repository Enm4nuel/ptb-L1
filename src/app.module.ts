import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AulasModule } from './aulas/aulas.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { TurnosModule } from './turnos/turnos.module';

@Module({
  imports: [
    AlumnosModule,
    MongooseModule.forRoot('mongodb+srv://enmanuel:enmanuel@politecnico.4e1mdkm.mongodb.net/politecnico?retryWrites=true&w=majority'),  
    AulasModule,
    ProfesoresModule,
    TurnosModule,
  ],
  controllers: [AppController],
  providers: [AppService]

})
export class AppModule {}
