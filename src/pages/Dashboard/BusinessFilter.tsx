import { Flex, Select } from '@chakra-ui/react';
import React from 'react';

interface Props {
    onChange?: (sector: string, company: string) => void;
    sectors: string[];
    companies: string[];
}

const BusinessFilter: React.FC<Props> = ({ sectors, companies, onChange }) => {
    const [sector, setSector] = React.useState('');
    const [company, setCompany] = React.useState('');
    return (
        <Flex direction={'row'} gap={'2%'}>
            <Select
                placeholder="Sector"
                w={'30%'}
                onChange={(e) => {
                    e.target.value && setSector(e.target.value);
                    onChange && onChange(e.target.value, company);
                }}
            >
                {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                        {sector}
                    </option>
                ))}
            </Select>
            <Select
                placeholder="Company"
                w={'30%'}
                onChange={(e) => {
                    e.target.value && setCompany(e.target.value);
                    onChange && onChange(sector, e.target.value);
                }}
            >
                {companies.map((company) => (
                    <option key={company} value={company}>
                        {company}
                    </option>
                ))}
            </Select>
        </Flex>
    );
};

export default BusinessFilter;
