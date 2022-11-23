/**
 * Fetch method for GET requests
 * @param url URL to fetch data from
 * @returns {Promise<T>}
 */
export const dataFetch = <T>(url: string): Promise<T> => fetch(url).then<T>((r) => r.json() as Promise<T>);
