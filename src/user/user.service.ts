import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { UserModel } from './model/user.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { OrganizationModel } from './model/organization.model'
import { OrderModel } from './model/order.model'
import { use } from 'passport'

@Injectable()
export class UserService {

	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
		@InjectModel(OrganizationModel) private readonly organizationModel: ModelType<OrganizationModel>,
		@InjectModel(OrderModel) private readonly orderModel: ModelType<OrderModel>
	) {
	}


	async getAllUser() {
		return this.userModel.find()
	}

	async createOrganization(dto) {
		const user = await this.userModel.findById(dto.userId)
		const organization = await this.organizationModel.create({ ...dto })
		user.organizations.push(organization.id)
		user.save()
		return organization
	}


	async getUserData(id) {
		const user = await this.userModel.findById(id).populate(['organizations', 'orders'])
		return user
	}

	async createOrder(dto) {
		const user = await this.userModel.findById(dto.userId)
		const order = await this.orderModel.create({ ...dto })
		user.orders.push(order.id)
		user.save()
		return order
	}

	async deleteOrganization(dto) {
		const user = await this.userModel.findById(dto.userId)
		const index = user.organizations.indexOf(dto.id)
		user.organizations.splice(index, 1)
		const organization = this.organizationModel.findByIdAndDelete(dto.id)
		user.save()
		return organization
	}

	async deleteOrders(dto) {
		const user = await this.userModel.findById(dto.userId)
		const index = user.orders.indexOf(dto.id)
		user.orders.splice(index, 1)
		const order = this.orderModel.findByIdAndDelete(dto.id)
		user.save()
		return order
	}


}
