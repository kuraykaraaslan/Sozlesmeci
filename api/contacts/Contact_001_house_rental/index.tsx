///Common of Partials/
import Common_001_partial_001_date from '@/contacts/Common/Common_001_partial_001_date';
import Common_001_partial_002_title from '@/contacts/Common/Common_001_partial_002_title';
import Common_001_partial_003_group from '@/contacts/Common/Common_001_partial_003_group';
import Common_001_partial_004_parties from '@/contacts/Common/Common_001_partial_004_parties';

// React-PDF
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Contact_001_house_rental = () => {

    const tempparties = [
        {
            inputs: [
                ['Ad', 'Ali'],
                ['Soyad', 'Veli'],
                ['Telefon', '1234567890'],
                ['TC', '12345678901'],
                ['Adres', 'İstanbul']
            ],
            title: 'Kiracı',
        },
        {
            inputs: [
                ['Ad', 'Ayşe'],
                ['Soyad', 'Fatma'],
                ['Telefon', '0987654321'],
                ['TC', '09876543210'],
                ['Adres', 'Ankara']
            ],
            title: 'Ev Sahibi',
        },
    ];


    return (
        <Document>
            <Page size="A4">
                <Common_001_partial_001_date props={{ date: new Date(), format: 'dd/MM/yyyy' }} />
                <Common_001_partial_002_title props={{ title: 'Kira Sözleşmesi' }} />
                <Common_001_partial_004_parties title='Taraflar' number={1} parties={tempparties} />
            </Page>
        </Document>
    );
}


export default Contact_001_house_rental;