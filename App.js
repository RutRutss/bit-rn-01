import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
} from "react-native";

const addFriend = () => {
  Alert.alert("แจ้งเตือน", "เพิ่มเป็นเพื่อนสำเร็จ!");
};

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
              marginBottom: 5,
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
            <View
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 200,
                }}
                source={{
                  uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%A3%E0%B8%B8%E0%B8%88-768x1170.png",
                }}
              />
            </View>

            <Text style={{ color: "black", fontSize: 26, fontWeight: "bold" }}>
              Wisarut Yuensuk
            </Text>

            <View style={{ flexDirection: "row" }}>
              <View>
                <Text>
                  เพื่อน <Text style={{ fontWeight: "bold" }}>979</Text> คน
                </Text>
                <Text>Rut_Wisarut</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ width: "80%" }}>
                  <Button
                    title="เพิ่มเพื่อน"
                    color={"#0866ff"}
                    onPress={addFriend}
                  />
                </View>
              </View>
            </View>
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
              🎓 เคยศึกษา{" "}
              <Text style={{ fontWeight: "bold" }}>คอมพิวเตอร์ศึกษา</Text> ที่{" "}
              <Text style={{ fontWeight: "bold" }}>
                มหาวิทยาลัยราชภัฏราชนครินทร์
              </Text>
              ฉะเชิงเทรา
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 6 }}>
              🏠 อาศัยอยู่ที่{" "}
              <Text style={{ fontWeight: "bold" }}>Prachin Buri, Thailand</Text>
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

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {/* คอลัมน์ที่ 1 */}
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 15,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: 100,
                  }}
                  source={{
                    uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%82%E0%B8%AD%E0%B9%8A%E0%B8%84-768x1170.png",
                  }}
                />
                <Text>เกียรติยศ สีหะวงษ์</Text>
              </View>

              {/* คอลัมน์ที่ 2 */}
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 15,
                  marginHorizontal: 5,
                  height: 100,
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%99-768x1170.png",
                  }}
                />
                <Text>อาทิตยา เสียงล้ำ</Text>
              </View>

              {/* คอลัมน์ที่ 3 */}
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 15,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%82%E0%B8%94%E0%B8%99%E0%B8%B1%E0%B8%97-768x1170.png",
                  }}
                />
                <Text>กิตติณัฐ์ เลิศรัตนไผท</Text>
              </View>

              {/* คอลัมน์ที่ 4 */}
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 15,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87-768x1170.png",
                  }}
                />
                <Text>อภินันท์ สมบูรณ์กุล</Text>
              </View>

              {/* คอลัมน์ที่ 5 */}
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 15,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%A1-768x1170.png",
                  }}
                />
                <Text>เอกรัตน์ อุไรโรจน์</Text>
              </View>

              {/* คอลัมน์ที่ 6 */}
              <View
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 15,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%81%E0%B8%9A%E0%B8%A1-768x1170.png",
                  }}
                />
                <Text>ภัททิรา ขวัญรวี</Text>
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
