import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from '@typegoose/typegoose'
import { OrganizationModel } from './organization.model'

export interface OrderModel extends Base {

}

export class OrderModel extends TimeStamps {

	@prop({unique: true})
	progress: string

	@prop()
	client: OrganizationModel

	@prop()
	orderType: string
}

