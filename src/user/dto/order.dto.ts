import { IsEmail, IsString, MinLength } from 'class-validator'
import Mongoose from 'mongoose'

export class AuthDto {

	@IsString()
	userName: string

	@IsEmail()
	email: string

	@MinLength(8,{
		message: 'Password cannot be less than 8 character!'
	})
	@IsString()
	password: string
}