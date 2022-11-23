import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BusinessDetail from './pages/BusinessDetail';
import { Box, ChakraProvider } from '@chakra-ui/react';

const App = (): JSX.Element => {
    return (
        <ChakraProvider>
            <Box h={'100vh'}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/business/:id" element={<BusinessDetail />} />
                </Routes>
            </Box>
        </ChakraProvider>
    );
};

export default App;
