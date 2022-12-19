import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBusiness } from 'interface/Interfaces';

interface Props extends IBusiness {
    onClick?: () => void;
}

const BusinessListElement: React.FC<Props> = ({ id, name, siren, sector }) => {
    const navigate = useNavigate();

    return (
        <li
            onClick={() => {
                navigate(`/business/${id}`);
            }}
        >
            <Button
                w={['100%']}
                h={'5rem'}
                bgColor={'transparent'}
                justifyContent={'space-between'}
                borderWidth={'1px'}
                borderStyle={'solid'}
                borderColor={'grey.light'}
                _hover={{ bgColor: 'grey.light', borderColor: 'blue.main' }}
            >
                <span className="w-1/3 text-left whitespace-pre-wrap">{name.toUpperCase()}</span>
                <span className="w-1/3 text-center md:text-left">{siren}</span>
                <span className="w-1/3 text-center md:text-left">
                    <span className="px-4 py-2 bg-blue-main text-white rounded-md">{sector}</span>
                </span>
            </Button>
        </li>
    );
};

export default BusinessListElement;
