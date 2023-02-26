import { IsEmail, IsMongoId, IsPhoneNumber, IsString } from 'class-validator'
import Mongoose from 'mongoose'
import { identity } from 'rxjs'
import { mongoose } from '@typegoose/typegoose'

export class OrganizationDto {

	@IsString()
	name: string

	@IsPhoneNumber()
	phone: string

	@IsEmail()
	email: string

	@IsString()
	formOrganization: string

	@IsString()
	character: string

	@IsMongoId()
	userId: string

}