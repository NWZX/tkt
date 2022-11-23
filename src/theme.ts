import { extendTheme } from '@chakra-ui/react';
const customTheme = extendTheme({
    fonts: {
        heading: `'AvenirR', sans-serif`,
        body: `'AvenirR', sans-serif`,
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
            main: '#4E59FF',
        },
        secondary: {
            main: '#FA3A3A',
        },
    },
});
export default customTheme;
