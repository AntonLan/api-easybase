import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule,  } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModule } from './user/user.module'

const DB_HOST = process.env.DB_HOST || '127.0.0.1'
const DB_PORT = process.env.DB_PORT || '27017'



@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRoot('mongodb://' + DB_HOST + ':' + DB_PORT + '/easy-base'),
		AuthModule,
		UserModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
}
