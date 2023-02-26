import { IsEnum, IsMongoId, IsString } from 'class-validator'
import { ProgressEnum } from '../model/ProgressEnum'


export class OrderDto {


	@IsEnum(ProgressEnum)
	progress: ProgressEnum

	@IsString()
	client: string

	@IsString()
	orderType: string

	@IsMongoId()
	userId: string
}