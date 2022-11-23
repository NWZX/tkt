export interface ApiResponse<T = unknown> {
    data?: T;
    error?: string;
}

export interface IBusiness {
    id: number;
    name: string;
    sector: string;
    siren: number;
    results: number[];
}

export interface IResult {
    id: number;
    ca: number;
    margin: number;
    ebitda: number;
    loss: number;
    year: number;
    business: number;
}
