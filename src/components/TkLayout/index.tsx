import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import TkMenu from './TkMenu';
import TkMobileMenu from './TkMobileMenu';

interface Props {
    children?: React.ReactNode;
    hiddenMenuButton?: boolean;
}

const TkLayout: React.FC<Props> = ({ children, hiddenMenuButton }) => {
    return (
        <Flex w={'100%'} h={'100%'} gap={['0%', '0%', '5%']} direction={['column', 'column', 'row']}>
            <Box w={['25%']} display={['none', 'none', 'block']} px={'2%'} pt={'2%'} bg={'#F9F9F9'}>
                <TkMenu />
            </Box>
            <Box display={['block', 'block', 'none']} pt={'2%'}>
                <TkMobileMenu hiddenMenuButton={hiddenMenuButton} />
            </Box>
            <Box w={['100%', '100%', '70%']} pr={['5%', '5%', '2%']} pl={['5%', '5%', '0%']} pt={'2%'}>
                {children}
            </Box>
        </Flex>
    );
};

export default TkLayout;
