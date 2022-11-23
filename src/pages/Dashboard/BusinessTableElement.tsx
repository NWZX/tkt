import { Tag, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBusiness } from 'src/interface/Interfaces';

interface Props extends IBusiness {
    onClick?: () => void;
}

const BusinessTableElement: React.FC<Props> = ({ id, name, siren, sector }) => {
    const navigate = useNavigate();

    return (
        <Tr
            onClick={() => {
                navigate(`/business/${id}`);
            }}
        >
            <Td>{name.toUpperCase()}</Td>
            <Td>{siren}</Td>
            <Td>
                <Tag>{sector}</Tag>
            </Td>
        </Tr>
    );
};

export default BusinessTableElement;
