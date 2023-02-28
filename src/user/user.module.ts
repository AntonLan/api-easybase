import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from './model/user.model'
import { OrganizationModel } from './model/organization.model'
import { OrderModel } from './model/order.model'
import { AuthModule } from '../auth/auth.module'

@Module({
	imports: [
		AuthModule,
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'users'
				}
			}
		]),
		TypegooseModule.forFeature([
			{
				typegooseClass: OrganizationModel,
				schemaOptions: {
					collection: 'organizations'
				}
			}
		]),
		TypegooseModule.forFeature([
			{
				typegooseClass: OrderModel,
				schemaOptions: {
					collection: 'orders'
				}
			}
		])
	],
	providers: [UserService],
	controllers: [UserController]
})
export class UserModule {
}
