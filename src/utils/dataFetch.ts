/**
 * Fetch method for GET requests
 * @param url URL to fetch data from
 * @returns {Promise<T>}
 */
export const dataFetch = <T>(url: string): Promise<T> => fetch(url).then<T>((r) => r.json() as Promise<T>);

export const dataFetchMulti = <T>(url: string, ids: number[]): Promise<T[]> => {
    console.log('dataFetchMulti', url, ids);
    if (ids.length === 0) {
        return Promise.resolve([]);
    }
    const promises = ids.map((id) => dataFetch<T>(url + id));
    return Promise.all(promises);
};
