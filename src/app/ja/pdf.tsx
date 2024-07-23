import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import FontRegular from "@/public/fonts/NotoSansJP-Regular.ttf";
import FontBold from "@/public/fonts/NotoSansJP-Bold.ttf";

Font.register({
  family: "NotoSansJP-Regular",
  src: FontRegular,
  fontStyle: "normal",
});

Font.register({
  family: "NotoSansJP-Bold",
  src: FontBold,
  fontStyle: "bold",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "NotoSansJP-Regular",
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
          <Text>日本語テスト</Text>
        </View>
        <View style={styles.section}>
          <Text>文字化けしていますか？どうなんじゃい笑</Text>
        </View>
      </Page>
    </Document>
  );
}
