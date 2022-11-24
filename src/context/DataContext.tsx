import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { dataFetch } from 'utils/dataFetch';
import { IBusiness, IResult } from 'interface/Interfaces';

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

type TGetAllBusiness = { data: IBusiness[]; isLoading?: boolean; error?: Error };
/**
 * Public Entry Point to Fetch Business Data
 * @param id id of the user to fetch
 * @returns {TUserContext}
 */
export const GetAllBusiness = (refresh = true): TGetAllBusiness => {
    const [context, dispatch] = useContext(DataContext);
    const [business, setBusiness] = React.useState<IBusiness[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (context.business && (Date.now() - context.business.timestamp < 60000 || !refresh)) {
            setBusiness(context.business.data);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            (async () => {
                try {
                    const remoteBusiness = await dataFetch<IBusiness[]>(context.apiRoute + `/biz/`);

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
    }, [context.apiRoute, context.business, dispatch, error, isLoading, refresh]);

    return { data: business, isLoading, error };
};

type TBusinessById = { data?: IBusiness; isLoading?: boolean; error?: Error };
export const GetBusinessById = (id?: number): TBusinessById => {
    const [business, setBusiness] = React.useState<IBusiness>();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<Error>();

    const { data, error: allError, isLoading: allIsLoading } = GetAllBusiness(false);

    useEffect(() => {
        if (id && data && !allIsLoading && !allError) {
            const foundBusiness = data.find((b) => b.id === id);
            if (foundBusiness) {
                setBusiness(foundBusiness);
            } else {
                setError(new Error('Business not found'));
            }
            setIsLoading(false);
        } else if (allIsLoading) {
            setIsLoading(true);
        } else if (allError) {
            setError(allError);
            setIsLoading(false);
        }
    }, [id, data, allIsLoading, allError]);

    return { data: business, isLoading, error };
};

type TResultContext = { data: IResult[]; isLoading?: boolean; error?: Error };
/**
 * Public Entry Point to Fetch Business Result Data
 * @param id id of the user to fetch
 * @returns {TUserContext}
 */
export const GetAllResultByIds = (ids?: number[]): TResultContext => {
    const [context, dispatch] = useContext(DataContext);
    const [result, setResult] = React.useState<IResult[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (context.result && Date.now() - context.result.timestamp < 60000) {
            setResult(context.result.data);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            (async () => {
                try {
                    const remoteResult = await dataFetch<IResult[]>(context.apiRoute + `/result/`);

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
    }, [context.apiRoute, context.result, dispatch, error, isLoading]);

    if (ids) {
        const hasResult = result.filter((b) => {
            return ids.includes(b.id);
        });
        if (hasResult) {
            return { data: hasResult, isLoading, error };
        } else return { data: [], isLoading, error: new Error(`Business with ids not found in the data`) };
    } else {
        return { data: [], isLoading, error };
    }
};
