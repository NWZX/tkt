import { Flex } from '@chakra-ui/react';
import TkSelect from 'components/TkSelect';
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
        <Flex direction={['column', 'row']} gap={'1rem'}>
            <TkSelect
                placeholder="Sector *"
                aria-label="Sector"
                isRequired
                w={['100%', '100%', '30%']}
                onChange={(e) => {
                    setSector(e.target.value);
                    onChange && onChange(e.target.value, company);
                }}
            >
                {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                        {sector}
                    </option>
                ))}
            </TkSelect>
            <TkSelect
                placeholder="Company *"
                aria-label="Company"
                isRequired
                w={['100%', '100%', '30%']}
                onChange={(e) => {
                    setCompany(e.target.value);
                    onChange && onChange(sector, e.target.value);
                }}
            >
                {companies.map((company) => (
                    <option key={company} value={company}>
                        {company}
                    </option>
                ))}
            </TkSelect>
        </Flex>
    );
};

export default BusinessFilter;
