import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BusinessDetail from './pages/BusinessDetail';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Fonts from 'Font';
import theme from './theme';
import { DataContextProvider } from 'interface/DataContext';

const App = (): JSX.Element => {
    return (
        <DataContextProvider apiRoute="https://test.wertkt.com/api">
            <ChakraProvider theme={theme}>
                <Fonts />
                <Box h={'100vh'}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/business/:id" element={<BusinessDetail />} />
                    </Routes>
                </Box>
            </ChakraProvider>
        </DataContextProvider>
    );
};

export default App;
