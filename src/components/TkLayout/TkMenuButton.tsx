import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends ButtonProps {}

const TkMenuButton: React.FC<Props> = ({ ...props }) => {
    return (
        <Button
            {...props}
            size={'lg'}
            justifyContent="left"
            h={'4.5rem'}
            bgColor={'transparent'}
            _hover={{ bgColor: '#E8E9FA', color: '#4E59FF' }}
            className="tk-menu-button"
        ></Button>
    );
};

export default TkMenuButton;
