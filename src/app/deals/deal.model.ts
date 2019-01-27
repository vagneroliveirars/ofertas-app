import { BuyOption } from './../buy-options/buy-option.model';

/**
 * Model representing a deal
 */
export class Deal {

    constructor(
            public id: string,
            public title: String,
            public text: String,
            public createDate: Date,
            public publishDate: Date,
            public endDate: Date,
            public url: string,
            public totalSold: number,
            public type: string,
            public buyOptions: BuyOption[]
    ) {}

}
