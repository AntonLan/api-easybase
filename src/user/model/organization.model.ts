import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { mongoose, prop } from '@typegoose/typegoose'
import { UserModel } from './user.model'

export interface OrganizationModel extends Base {

}

export class OrganizationModel {

	@prop()
	name: string

	@prop()
	email: string

	@prop()
	phone: string

	@prop()
	formOrganization: string

	@prop()
	character: string

	@prop({ref: () => UserModel})
	user: UserModel
}