import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {UserSchema} from "./models/user.schema";
import {HestiaService} from "./hestia.service";
import {GetUserArgs} from "./dto/args/get-user.args";
import {GetUsersArgs} from "./dto/args/get-users.args";
import {CreateUserInput} from "./dto/input/create-user.input";
import {UpdateUserInput} from "./dto/input/update-user.input";
import {DeleteUserInput} from "./dto/input/delete-user.input";

@Resolver(() => UserSchema)
export class UsersResolver {
    constructor(private readonly hestiaService: HestiaService) {
    }

    @Query(() => String,{name:'hello'})
    sayHello(): string {
        return 'Hello World!';
    }
    /*@Query(()=>UserSchema,{name:'user',nullable:true})
    getUser(@Args() getUserArgs:GetUserArgs): UserSchema {
        return this.hestiaService.getUser(getUserArgs);
    }

    @Query(()=>[UserSchema], {name:'users',nullable:'items'})
    getUsers(@Args() getUsersArgs:GetUsersArgs):UserSchema[]{
        return this.hestiaService.getUsers(getUsersArgs);
    }

    @Mutation(()=>UserSchema)
    createUser(@Args('createUserData') createUserData:CreateUserInput){
        return this.hestiaService.createUser(createUserData);
    }

    @Mutation(()=>UserSchema)
    updateUser(@Args('updateUserData')updateUserData:UpdateUserInput):UserSchema{
        return this.hestiaService.updateUser();
    }

    @Mutation()
    deleteUser(@Args('deleteUserData')deleteUserData:DeleteUserInput){
        return this.hestiaService.deleteUser();
    }*/
}