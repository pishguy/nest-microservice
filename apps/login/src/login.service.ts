import {Inject, Injectable, Logger} from '@nestjs/common';
import {RequestCreateNewUser} from "./dto/request-new-user.request";
import {LoginRepository} from "./login-repository.service";

@Injectable()
export class LoginService {
    private readonly logger = new Logger(LoginService.name);

    constructor(private readonly hestiaRepository: LoginRepository) {
    }

    getAll() {
        this.logger.log('salam');
        return this.hestiaRepository.find({});
    }

    async createNewUser(request: RequestCreateNewUser) {
        //this.registerClient.emit('register_request', request);
        this.logger.log('salam');
    }

    async register(request: RequestCreateNewUser) {
        this.logger.log(request);
        await this.hestiaRepository.create(request);
        return this.hestiaRepository.find({});
    }
}
