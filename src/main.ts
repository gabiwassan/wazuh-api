import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
    logger: ['error', 'log', 'warn'],
  });
  app.enableCors();

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Wazuh API')
      .setDescription('Wazuh API')
      .build(),
  );
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
