import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from '../user/model/user.model'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'


@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'users'
				}
			},
		]),
		ConfigModule,
		JwtModule.register({
			secret: process.env.PRIVATE_KEY || 'SECRET',
			signOptions: {
				expiresIn: '24h'
			}
		})
	],
	exports: [
		AuthService,
		JwtModule
	],
	providers: [AuthService],
	controllers: [AuthController]
})
export class AuthModule {
}
