import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TkLayout from 'components/TkLayout';
import BackIcon from 'icons/BackIcon';
import { IBusiness, IResult } from 'interface/Interfaces';
import { dataFetch } from 'utils/dataFetch';
import BarGraphCard from './BarGraphCard';
import { Helmet } from 'react-helmet';
import { useResultContext } from 'interface/DataContext';

interface Props {}

const BusinessDetail: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useResultContext();

    const [filtredData, setFiltredData] = useState<IResult[]>([]);
    const [businessInfo, setBusinessInfo] = useState<IBusiness | undefined>();

    useEffect(() => {
        if (!id) {
            navigate('/');
        } else {
            //check if the id is valid
            const clearedId = Number.parseInt(id);
            if (isNaN(clearedId)) {
                navigate('/');
            }
            if (data) {
                (async () => {
                    try {
                        const response = await dataFetch<IBusiness>(`https://test.wertkt.com/api/biz/${clearedId}/`);
                        setBusinessInfo(response);
                    } catch (error) {
                        navigate('/');
                    }
                })();
                const filteredData = data.filter((result) => result.business === clearedId);
                setFiltredData(filteredData.reverse());
            }
        }
    }, [id, navigate, data]);

    return (
        <>
            <Helmet>
                <title>{businessInfo?.name}</title>
                <link rel="canonical" href={`http://localhost/business/${id}`} />
            </Helmet>
            <TkLayout hiddenMenuButton={true}>
                <Flex direction={'row'} gap={'1rem'}>
                    <Box my="auto">
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
                    </Box>
                    <Flex direction={'column'} gap={'1rem'}>
                        <Heading as={'h1'} size={'lg'}>
                            {businessInfo?.name}
                        </Heading>
                        <Text fontSize={'xs'}>N° SIREN {businessInfo?.siren}</Text>
                    </Flex>
                </Flex>
                <Flex direction={'row'} flexWrap={'wrap'} gap={'2rem'} marginTop={['3rem', '3rem', '0']}>
                    <BarGraphCard
                        name="Chiffre d'affaire"
                        data={filtredData.map((v) => {
                            return { ammount: v.ca, year: v.year };
                        })}
                    />
                    <BarGraphCard
                        name="EBITDA"
                        data={filtredData.map((v) => {
                            return { ammount: v.ebitda, year: v.year };
                        })}
                    />
                    <BarGraphCard
                        name="Loss"
                        data={filtredData.map((v) => {
                            return { ammount: v.loss, year: v.year };
                        })}
                    />
                    <BarGraphCard
                        name="Margin"
                        data={filtredData.map((v) => {
                            return { ammount: v.margin, year: v.year };
                        })}
                    />
                </Flex>
            </TkLayout>
        </>
    );
};

export default BusinessDetail;
