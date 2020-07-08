import Comic from 'src/app/model/comic';

export class CartItem {
    constructor(
        public comic?: Comic,
        public quantity?: number,
    ) { }
}
