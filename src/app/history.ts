export interface History {
    tourDatesBought: ConcreteBuy[];
    username:  string;
}

export interface ConcreteBuy {
    amount: number;
    tourDateId: string;
}
