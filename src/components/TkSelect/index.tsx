import { Select, SelectProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends SelectProps {}

const TkSelect: React.FC<Props> = ({ ...props }) => {
    return (
        <Select
            {...props}
            _hover={{ borderColor: 'blue.main' }}
            _focusVisible={{ borderColor: 'blue.main', boxShadow: 'none' }}
        />
    );
};

export default TkSelect;
