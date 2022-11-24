export interface ApiResponse<T = unknown> {
    data?: T;
    error?: string;
}

export interface IBusiness {
    /**
     * The business ID.
     */
    id: number;
    /**
     * The business name.
     */
    name: string;
    /**
     * The business sector of activity.
     */
    sector: string;
    /**
     * The business SIREN number.
     */
    siren: number;
    /**
     * The business associated result.
     */
    results: number[];
}

export interface IResult {
    /**
     * The result ID.
     */
    id: number;
    ca: number;
    margin: number;
    ebitda: number;
    loss: number;
    year: number;
    business: number;
}
