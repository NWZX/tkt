import { IconButton, Skeleton, SkeletonText } from '@chakra-ui/react';
import BackIcon from 'icons/BackIcon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    businessName?: string;
    businessSiren?: number;
}

const BusinessDetailHead: React.FC<Props> = ({ businessName, businessSiren }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row gap-4">
            <div className="my-auto">
                <IconButton
                    aria-label="Back"
                    mr={'5%'}
                    borderRadius={'50px'}
                    bg={'linear-gradient(161.01deg, #01F2CF -8.06%, #99ACFF -8.05%, #4E6EFC 108.81%);'}
                    boxShadow={'0px 6px 20px rgba(5, 55, 156, 0.25)'}
                    icon={<BackIcon />}
                    color={'white'}
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </div>
            <div className="flex flex-col gap-4">
                <Skeleton isLoaded={!!businessName} height={'32px'}>
                    <h1 className="text-4xl">
                        {businessName ? businessName : <SkeletonText noOfLines={1} spacing="15" />}
                    </h1>
                </Skeleton>
                <SkeletonText noOfLines={1} spacing="4" isLoaded={!!businessSiren}>
                    <p className="text-xs text-grey-light">N° SIREN {businessSiren}</p>
                </SkeletonText>
            </div>
        </div>
    );
};

export default BusinessDetailHead;
