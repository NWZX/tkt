import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const BusinessTable: React.FC<Props> = ({ children }) => {
    return (
        <TableContainer maxH={'400px'} overflowY={'auto'}>
            <Table variant="simple" size={'lg'}>
                <Thead>
                    <Tr>
                        <Th>COMPANY</Th>
                        <Th>N° SIREN</Th>
                        <Th>CATEGORY</Th>
                    </Tr>
                </Thead>
                <Tbody>{children}</Tbody>
            </Table>
        </TableContainer>
    );
};

export default BusinessTable;
