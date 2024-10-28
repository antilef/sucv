import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
    async hash(text: string):Promise<string>{
        const saltOrRounds = 10;
        return bcrypt.hash(text,saltOrRounds);
    }

    compare(password:string,hash: string) {
        return bcrypt.compare(password,hash)
    }
}