import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import Mongoose from 'mongoose'
import { OrganizationDto } from './dto/organization.dto'
import { OrderDto } from './dto/order.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('users')
export class UserController {


	constructor(private readonly userService: UserService) {
	}


	@Get()
	private getAll() {
		return this.userService.getAllUser()
	}

	@Post('/organizations')
	createOrganization(@Body() dto: OrganizationDto) {
		return this.userService.createOrganization(dto)
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	getUser(@Param('id') id: Mongoose.Types.ObjectId) {
		const organizations = this.userService.getUserData(id)
		return organizations
	}

	@Post('/orders')
	createOrder(@Body() dto: OrderDto) {
		return this.userService.createOrder(dto)
	}

	@Delete('/organizations')
	deleteOrganization(@Body() dto: OrganizationDto){
		return this.userService.deleteOrganization(dto)
	}

	@Delete('/orders')
	deleteOrders(@Body() dto: OrderDto){
		return this.userService.deleteOrders(dto)
	}

	@Put('/organizations')
	updateOrganization(@Body() dto: OrganizationDto){
		return this.userService.updateOrganization(dto)
	}

	@Put('/orders')
	updateOrder(@Body() dto: OrderDto){
		return this.userService.updateOrder(dto)
	}

}
