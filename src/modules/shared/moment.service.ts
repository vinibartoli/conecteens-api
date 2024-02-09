/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import * as moment from 'moment-timezone';

@Injectable()
export class MomentService {

    async timeExact() {
        const currentDate = moment.utc();
        const utcMinus3 = currentDate.clone().subtract(3, 'hours').toDate();
        return utcMinus3;
    }

}
