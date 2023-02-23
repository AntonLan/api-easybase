import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const PORT = process.env.PORT || 5002
	const app = await NestFactory.create(AppModule)
	app.enableCors()
  app.setGlobalPrefix('api')
	await app.listen(PORT, () => console.log(`Server start on ${PORT}`))
}

bootstrap().then(r => console.log(r))
