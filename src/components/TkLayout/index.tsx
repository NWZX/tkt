import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import TkMenu from './TkMenu';

interface Props {
    children?: React.ReactNode;
}

const TkLayout: React.FC<Props> = ({ children }) => {
    return (
        <Flex w={'100%'} h={'100%'} gap={'5%'}>
            <Box w={['20%']} px={'2%'} pt={'2%'} bg={'#E8E9FA'}>
                <TkMenu />
            </Box>
            <Box w={'75%'} pr={'2%'} pt={'2%'}>
                {children}
            </Box>
        </Flex>
    );
};

export default TkLayout;
