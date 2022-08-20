import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AlumnosController } from './alumnos/alumnos.controller';
import { AlumnoService } from './alumnos/alumnos.service';
import { AlumnoSchema } from './alumnos/schemas/alumno.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Politecnico')
    .setDescription(
      'Esta es una REST Api de un politécnico para una prueba tecnica',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
