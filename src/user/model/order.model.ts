import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from '@typegoose/typegoose'
import { UserModel } from './user.model'
import { ProgressEnum } from './ProgressEnum'

export interface OrderModel extends Base {

}

export class OrderModel extends TimeStamps {

	@prop({enum: ProgressEnum, default: ProgressEnum.NOT_STARTED})
	progress: ProgressEnum

	@prop()
	client: string

	@prop()
	orderType: string

	@prop({ref: () => UserModel})
	user: UserModel
}

