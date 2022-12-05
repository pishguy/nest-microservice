import {AbstractRepository} from "@app/common";
import {Injectable, Logger} from "@nestjs/common";
import {Hestia} from "./schema/hestia.schema";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Connection, Model} from "mongoose";

@Injectable()
export class HestiaRepository extends AbstractRepository<Hestia> {
    protected readonly logger = new Logger(Hestia.name);

    constructor(@InjectModel(Hestia.name) hestiaModel: Model<Hestia>, @InjectConnection() connection: Connection) {
        super(hestiaModel, connection);
    }
}