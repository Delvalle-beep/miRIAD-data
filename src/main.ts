import { DumpService } from './domain/dump/dump.service';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     transform: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );
  const dumpService = new DumpService();
  await dumpService.startQueue();
}
bootstrap();
