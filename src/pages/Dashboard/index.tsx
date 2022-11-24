import { Flex, Heading, ListItem, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TkLayout from 'components/TkLayout';
import { IBusiness } from 'interface/Interfaces';
import { Helmet } from 'react-helmet';
import BusinessFilter from './BusinessFilter';
import BusinessList from './BusinessList';
import BusinessListElement from './BusinessListElement';
import { GetAllBusiness } from 'context/DataContext';

interface Props {}

const Dashboard: React.FC<Props> = () => {
    const { data, isLoading } = GetAllBusiness();
    const [companyTag, setCompanyTag] = useState<string[]>([]);
    const [sectorTag, setSectorTag] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState<IBusiness[]>([]);

    useEffect(() => {
        if (data) {
            //Extract all the sectors withou duplicates
            const sectors = data.map((business) => business.sector);
            const uniqueSectors = [...new Set(sectors)];
            setSectorTag(uniqueSectors);

            //Extract all the companies without duplicates
            const companies = data.map((business) => business.name);
            const uniqueCompanies = [...new Set(companies)];
            setCompanyTag(uniqueCompanies);

            //Set the data to the filtered data
            setFilteredData(data);
        }
    }, [data]);

    const handleFilterChange = (sector: string, company: string): void => {
        if (data) {
            const result = data.filter(
                (business) =>
                    (sector ? business.sector === sector : true) && (company ? business.name === company : true),
            );

            setFilteredData(result.filter((v, i, a) => a.findIndex((v2) => v2.siren === v.siren) === i));
        }
    };

    return (
        <>
            <Helmet>
                <title>TKT Dashboard</title>
                <link rel="canonical" href="http://localhost" />
            </Helmet>
            <TkLayout>
                <Flex direction={'column'} gap={'3rem'}>
                    <Heading as="h2" size={['md', 'md', 'lg']}>
                        Welcome on TKT Dashboard!
                    </Heading>
                    <BusinessFilter
                        sectors={sectorTag}
                        companies={companyTag}
                        onChange={handleFilterChange}
                    ></BusinessFilter>
                    <BusinessList>
                        {isLoading ? (
                            <ListItem textAlign={'center'}>
                                <Spinner color="blue.main" />
                            </ListItem>
                        ) : (
                            filteredData.slice(0, 5).map((v) => {
                                return <BusinessListElement key={v.id} {...v} />;
                            })
                        )}
                    </BusinessList>
                </Flex>
            </TkLayout>
        </>
    );
};

export default Dashboard;
