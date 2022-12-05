import {AbstractRepository} from "@app/common";
import {Injectable, Logger} from "@nestjs/common";
import {Login} from "./schema/login.schema";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Connection, Model} from "mongoose";

@Injectable()
export class LoginRepository extends AbstractRepository<Login> {
    protected readonly logger = new Logger(Login.name);

    constructor(@InjectModel(Login.name) hestiaModel: Model<Login>, @InjectConnection() connection: Connection) {
        super(hestiaModel, connection);
    }
}