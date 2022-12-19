import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BusinessDetail from './pages/BusinessDetail';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from 'Font';
import theme from './theme';
import { DataContextProvider } from 'context/DataContext';

const App = (): JSX.Element => {
    return (
        <DataContextProvider apiRoute="https://test.wertkt.com/api">
            <ChakraProvider theme={theme}>
                <Fonts />
                <div className="h-screen">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/business/:id" element={<BusinessDetail />} />
                    </Routes>
                </div>
            </ChakraProvider>
        </DataContextProvider>
    );
};

export default App;
