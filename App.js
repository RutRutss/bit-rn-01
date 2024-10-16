import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        {/* รูปโปรไฟล์ */}
        <View style={{ flex: 1, backgroundColor: "#E5E4E2" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 15,
              backgroundColor: "white",
              paddingTop: 50,
            }}
          >
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
              Wisarut Yuensuk
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 15,
              marginVertical: 5,
              paddingHorizontal: 15,
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-1/457263560_2512331735644743_6395110264418069127_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEVNVAu7qt1gL7VxhFNr-BmnWVKjg_0Pn2dZUqOD_Q-fRvLzOl74VPNm2w3d-uzJG5AXNt1kZ7SZeXHogRMCpHh&_nc_ohc=VWa5wv37_YUQ7kNvgE9ZmCf&_nc_ht=scontent-bkk1-1.xx&_nc_gid=Afji_NTGbl3cbb4aGDbqu5J&oh=00_AYAGTH1UX-00-1oShSOVBs4jiFqjZ1McauUOVTCXchNG-A&oe=6714FEB3",
              }}
            />

            <Text style={{ color: "black", fontSize: 26, fontWeight: "bold" }}>
              Wisarut Yuensuk
            </Text>
            <Text>
              เพื่อน <Text style={{ fontWeight: "bold" }}>979</Text> คน
            </Text>
            <Text>Rut_Wisarut</Text>
          </View>

          {/* ข้อมูลส่วนตัว */}
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 15,
              marginVertical: 5,
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 6 }}>
              🎓 เคยศึกษา คอมพิวเตอร์ศึกษา ที่ มหาวิทยาลัยราชภัฏราชนครินทร์
              ฉะเชิงเทรา
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 6 }}>
              🏠 อาศัยอยู่ที่ Prachin Buri, Thailand
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 6 }}>❤️ มีแฟนแล้ว</Text>

            <View
              style={{
                borderBottomColor: "#E5E4E2",
                borderBottomWidth: 1,
                marginVertical: 15,
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>เพื่อน</Text>
              <Text style={{ fontSize: 18, color: "blue" }}>ดูทั้งหมด</Text>
            </View>

            <Text>เพื่อน 979 คน</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {/* คอลัมน์ที่ 1 */}
              <View
                style={{ width: "33%", alignItems: "center", marginBottom: 20 }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                />
                <Text>เกียรติยศ สีหะวงษ์</Text>
              </View>

              {/* คอลัมน์ที่ 2 */}
              <View
                style={{ width: "33%", alignItems: "center", marginBottom: 20 }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: "https://picsum.photos/200/300" }}
                />
                <Text>อาทิตยา เสียงล้ำ</Text>
              </View>

              {/* คอลัมน์ที่ 3 */}
              <View
                style={{ width: "33%", alignItems: "center", marginBottom: 20 }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: "https://picsum.photos/200/300" }}
                />
                <Text>กัญจน์ ศักดิ์คำดวง</Text>
              </View>

              {/* คอลัมน์ที่ 4 */}
              <View
                style={{ width: "33%", alignItems: "center", marginBottom: 20 }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: "https://picsum.photos/100/100" }}
                />
                <Text>สมหมาย รักพ่อ</Text>
              </View>

              {/* คอลัมน์ที่ 5 */}
              <View
                style={{ width: "33%", alignItems: "center", marginBottom: 20 }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: "https://picsum.photos/200/300" }}
                />
                <Text>สมปอง รักแม่</Text>
              </View>

              {/* คอลัมน์ที่ 6 */}
              <View
                style={{ width: "33%", alignItems: "center", marginBottom: 20 }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: "https://picsum.photos/200/300" }}
                />
                <Text>สมหญิง ศรีสวย</Text>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: "#E5E4E2",
                borderBottomWidth: 1,
                marginVertical: 15,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
