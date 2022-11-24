export const strInt = (str?: string): number | undefined => {
    const num = str ? parseInt(str, 10) : undefined;
    return num ? (isNaN(num) ? undefined : num) : undefined;
};
