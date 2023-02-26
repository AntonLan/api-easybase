import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { UserModel } from './model/user.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import * as Mongoose from 'mongoose'
import { OrganizationModel } from './model/organization.model'
import { OrderModel } from './model/order.model'

@Injectable()
export class UserService {

	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
		@InjectModel(OrganizationModel) private readonly organizationModel: ModelType<OrganizationModel>,
		@InjectModel(OrderModel) private readonly orderModel: ModelType<OrderModel>,
	) {}


	async getAllUser() {
		return this.userModel.find()
	}

	async getUserById(id: Mongoose.Types.ObjectId) {
		const user = await this.userModel.findById(id)
		return user
	}

	async createOrganization(dto) {
		const user = await this.userModel.findById(dto.userId)
		const organization = await this.organizationModel.create({ ...dto })
		user.organizations.push(organization.id)
		user.save()
		return organization
			}


	async getOrganizations(id: Mongoose.Types.ObjectId) {
		const user = await this.userModel.findById(id).populate('organizations')
		return user
	}

}
