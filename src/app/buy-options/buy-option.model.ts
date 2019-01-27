/**
 * Model representing a buy option
 */
export class BuyOption {

    constructor(
            public id: string,
            public title: String,
            public normalPrice: number,
            public salePrice: number,
            public percentageDiscount: number,
            public quantityCupom: number,
            public startDate: Date,
            public endDate: Date
    ) {}

}
