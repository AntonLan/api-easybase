import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from '@typegoose/typegoose'
import { OrganizationModel } from './organization.model'
import { OrderModel } from './order.model'

export interface UserModel extends Base {

}

export class UserModel extends TimeStamps {

	@prop({ unique: true })
	userName: string

	@prop({ unique: true })
	email: string

	@prop()
	password: string

	@prop({ ref: () => OrderModel, type: () => OrderModel })
	orders: OrderModel[]

	@prop({ ref: () => OrganizationModel})
	organizations: OrganizationModel[]
}

