import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { dataFetch } from 'src/utils/dataFetch';
import { IBusiness, IResult } from './Interfaces';

interface IDataContext {
    apiRoute?: string;
    business?: { data: IBusiness[]; timestamp: number };
    result?: { data: IResult[]; timestamp: number };
}

const initialState: IDataContext = {
    apiRoute: undefined,
    business: undefined,
    result: undefined,
};

type TActionType = 'business' | 'result';
interface IReducerAction {
    type: TActionType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: Record<string, any>;
}

function reducer(state: IDataContext, action: IReducerAction): IDataContext {
    console.log('reducer', action);
    switch (action.type) {
        case 'business':
            return { ...state, ...action.payload };
        case 'result':
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataContext = createContext<[IDataContext, (type: TActionType, payload?: Record<string, any>) => void]>([
    initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
]);

/**
 * Provider for the Data Fetching Method
 * @param param0 {apiRoute?: string; children: ReactNode}
 * @returns {JSX.Element}
 */
export const DataContextProvider = ({
    children,
    apiRoute,
}: {
    children: ReactNode;
    apiRoute?: string;
}): JSX.Element => {
    const [data, dispatchData] = useReducer(reducer, { ...initialState, apiRoute: apiRoute });

    return (
        <DataContext.Provider value={[data, (t, p) => dispatchData({ type: t, payload: p })]}>
            {children}
        </DataContext.Provider>
    );
};

type TBusinessContext = [business?: IBusiness[] | IBusiness, isLoading?: boolean, error?: Error];
/**
 * Public Entry Point to Fetch Business Data
 * @param id id of the user to fetch
 * @returns {TUserContext}
 */
export const useBusinessContext = (id?: number): TBusinessContext => {
    const [context, dispatch] = useContext(DataContext);
    const [business, setBusiness] = React.useState<IBusiness[]>();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (context.business && context.business.timestamp - Date.now() < 60000) {
            setBusiness(context.business.data);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            (async () => {
                try {
                    const remoteBusiness = await dataFetch<IBusiness[]>(context.apiRoute + `/user/${id}`);

                    setIsLoading(false);
                    dispatch('business', {
                        business: { data: remoteBusiness as IBusiness[], timestamp: Date.now() },
                    });
                } catch (error) {
                    setIsLoading(false);
                    setError(error as Error);
                }
            })();
        }
    }, [context.apiRoute, context.business, dispatch, error, id, isLoading]);

    if (id) {
        const hasBusiness = business?.find((b) => b.id === id);
        if (hasBusiness) {
            return [hasBusiness, isLoading, error];
        } else return [undefined, isLoading, new Error(`Business with id ${id} not found in the data`)];
    } else {
        return [business, isLoading, error];
    }
};

type TResultContext = [result?: IResult[] | IResult, isLoading?: boolean, error?: Error];
/**
 * Public Entry Point to Fetch Business Result Data
 * @param id id of the user to fetch
 * @returns {TUserContext}
 */
export const useResultContext = (id: number): TResultContext => {
    const [context, dispatch] = useContext(DataContext);
    const [result, setResult] = React.useState<IResult[]>();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (context.result && context.result.timestamp - Date.now() < 60000) {
            setResult(context.result.data);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            (async () => {
                try {
                    const remoteResult = await dataFetch<IResult[]>(context.apiRoute + `/user/${id}`);

                    setIsLoading(false);
                    dispatch('result', {
                        result: { data: remoteResult as IResult[], timestamp: Date.now() },
                    });
                } catch (error) {
                    setIsLoading(false);
                    setError(error as Error);
                }
            })();
        }
    }, [context.apiRoute, context.result, dispatch, error, id, isLoading]);

    if (id) {
        const hasResult = result?.find((b) => b.id === id);
        if (hasResult) {
            return [hasResult, isLoading, error];
        } else return [undefined, isLoading, new Error(`Business with id ${id} not found in the data`)];
    } else {
        return [result, isLoading, error];
    }
};
