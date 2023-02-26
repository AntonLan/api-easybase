import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import Mongoose from 'mongoose'
import { OrganizationDto } from './dto/organization.dto'

@Controller('User')
export class UserController {


	constructor(private readonly userService: UserService) {
	}


	@Get()
	private getAll() {
		return this.userService.getAllUser()
	}

	@Get()
	getUserById(id: Mongoose.Types.ObjectId) {
		return this.userService.getUserById(id)
	}

	@Post('/organization')
	createOrganization(@Body() dto: OrganizationDto) {
		return this.userService.createOrganization(dto)
	}

	@Get(':id')
	async getOrganization(@Param('id') id: Mongoose.Types.ObjectId) {
		const organizations = this.userService.getOrganizations(id)
		return organizations
	}


}
