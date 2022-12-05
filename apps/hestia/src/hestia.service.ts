import {Inject, Injectable, Logger} from '@nestjs/common';
import {RequestCreateNewUser} from "./dto/request-new-user.request";
import {LOGIN_SERVICE} from "./constants/services";
import {ClientProxy} from "@nestjs/microservices";
import {UserSchema} from "./models/user.schema";
import {CreateUserInput} from "./dto/input/create-user.input";
import {GetUserArgs} from "./dto/args/get-user.args";
import {GetUsersArgs} from "./dto/args/get-users.args";
import {HestiaRepository} from "./hestia.repository";

@Injectable()
export class HestiaService {
    private readonly logger = new Logger(HestiaService.name);

    constructor(private readonly hestiaRepository: HestiaRepository, @Inject(LOGIN_SERVICE) private registerClient: ClientProxy) {
    }

    public createUser(createUserData: CreateUserInput) {

    }

    public updateUser() {

    }

    public getUser(getUserArgs: GetUserArgs) {
    }

    public getUsers(getUsersArgs: GetUsersArgs) {
    }

    public deleteUser() {
        //
    }

    getAll() {
        return this.hestiaRepository.find({});
    }

    async createNewUser(request: RequestCreateNewUser) {
        this.registerClient.emit('register_request', request);
        //return this.hestiaRepository.create(request);
    }

    /*private toModel(userDocument:UserDocument):User{
        return {
            _id:userDocument._id.toHexString(),
            email:userDocument.email,
        }
    }*/
}
