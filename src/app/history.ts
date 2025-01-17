export interface History {
    tourDatesBought: ConcreteBuy[];
    username:  string;
    id: string;
}

export interface ConcreteBuy {
    amount: number;
    tourDateId: string;
}
