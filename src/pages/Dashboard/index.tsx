import { Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TkLayout from 'src/components/TkLayout';
import { IBusiness } from 'src/interface/Interfaces';
import { dataFetch } from 'src/utils/dataFetch';
import useSWR from 'swr';
import BusinessFilter from './BusinessFilter';
import BusinessTable from './BusinessTable';
import BusinessTableElement from './BusinessTableElement';

interface Props {}

const Dashboard: React.FC<Props> = () => {
    const { data } = useSWR<IBusiness[]>('https://test.wertkt.com/api/biz/', dataFetch);
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
            const filteredData = data.filter(
                (business) =>
                    (sector ? business.sector === sector : true) && (company ? business.name === company : true),
            );

            setFilteredData(filteredData.filter((v, i, a) => a.findIndex((v2) => v2.siren === v.siren) === i));
        }
    };

    return (
        <TkLayout>
            <Flex direction={'column'} gap={'3rem'}>
                <Heading as="h2">Welcome on TKT Dashboard</Heading>
                <BusinessFilter
                    sectors={sectorTag}
                    companies={companyTag}
                    onChange={handleFilterChange}
                ></BusinessFilter>
                <BusinessTable>
                    {filteredData.slice(0, 5).map((v) => {
                        return <BusinessTableElement key={v.id} {...v} />;
                    })}
                </BusinessTable>
            </Flex>
        </TkLayout>
    );
};

export default Dashboard;
