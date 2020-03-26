import React from 'react';
import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer'
import Button from '@material-ui/core/Button';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  download: {
      textDecoration : 'none',
      color : 'black'
  },
  buttonPosition: {
    marginTop : '100px',
    marginLeft : '10px',
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);


const PDFRenderComponent = () => (
    <Button variant="outlined" color="inherit" style = {styles.buttonPosition}>
        <PDFDownloadLink document={<MyDocument />} fileName="WSR.pdf" style = {styles.download}>
            {({ loading }) => (loading ? 'Loading document...' : 'Generate pdf')}
        </PDFDownloadLink>
    </Button>
);

export default PDFRenderComponent;