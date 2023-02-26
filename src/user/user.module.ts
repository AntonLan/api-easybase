import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from './model/user.model'
import { OrganizationModel } from './model/organization.model'
import { OrderModel } from './model/order.model'

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User'
        }
      },
    ]),
    TypegooseModule.forFeature([
      {
        typegooseClass: OrganizationModel,
        schemaOptions: {
          collection: 'Organization'
        }
      },
    ]),
    TypegooseModule.forFeature([
      {
        typegooseClass: OrderModel,
        schemaOptions: {
          collection: 'Order'
        }
      },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
