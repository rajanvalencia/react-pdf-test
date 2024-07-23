import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function PDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>English Test</Text>
        </View>
        <View style={styles.section}>
          <Text>Holy Sh*t!</Text>
        </View>
      </Page>
    </Document>
  );
}
