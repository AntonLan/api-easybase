import { IsEmail, IsMongoId, IsPhoneNumber, IsString } from 'class-validator'

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