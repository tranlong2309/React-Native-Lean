import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {} from "react-native-paper";
import React, { useState } from "react";

export default function Message() {
  const [flSMS, setFlSMS] = useState([
    {
      sms: "Yes",
      iconName: "checkbox-outline",
      color: "#00BB43",
      colorText: "#fff",
    },
    {
      sms: "No",
      iconName: "close-box-outline",
      color: "#E25B60",
      colorText: "#fff",
    },
    {
      sms: "Ok",
      iconName: "thumb-up-outline",
      color: "#3F79DA",
      colorText: "#fff",
    },
    {
      sms: "Traffic",
      iconName: "traffic-light-outline",
      color: "#F7EE44",
      colorText: "#000000",
    },
    {
      sms: "Accident",
      iconName: "alert-outline",
      color: "#F5AD5B",
      colorText: "#000000",
    },
    {
      sms: "Urgent",
      iconName: "bell-outline",
      color: "#C11E2B",
      colorText: "#000000",
    },
  ]);
  const [sms, setSMS] = useState([
    {
      id: 1,
      timeStamp: 1692949958000,
      role: "QL",
      sms: "Có lệnh vận chuyển mới",
    },
    {
      id: 2,
      timeStamp: 1692950018000,
      role: "QL",
      sms: "Có lệnh vận chuyển mới",
    },
    {
      id: 7,
      timeStamp: 1692953618000,
      role: "QL",
      sms: "Có lệnh vận chuyển mới",
    },
    {
      id: 4,
      timeStamp: 1693040018000,
      role: "NV",
      sms: "[Tạ Xuân Thu] đã hoàn thành kiểm tra xe [51C-90992]",
    },
    {
      id: 5,
      timeStamp: 1693212818000,
      role: "QL",
      sms: "Có lệnh vận chuyển mới",
    },
    {
      id: 6,
      timeStamp: 1693215537000,
      role: "NV",
      sms: "Long pro",
    },
  ]);
  const dataChat = sms.sort((a, b) => a.timeStamp - b.timeStamp);
  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };
  return (
    <View style={{ flex: 3 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 21,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#24519B" }}>
            Message
          </Text>
          <TouchableOpacity>
            <Icon name="refresh" size={24} color={"#4d4d4d"} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 7,
          backgroundColor: "#CCE4FA",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#E1F1FF",
            paddingVertical: 10,
            flexDirection: "row",
            height: 70,
            marginBottom: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {flSMS.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={{
                  minWidth: 55,
                  height: 55,
                  backgroundColor: item.color,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 5,
                  paddingHorizontal: 5,
                }}
              >
                <Icon name={item.iconName} size={20} color={item.colorText} />
                <Text
                  style={{
                    color: item.colorText,
                    fontWeight: "600",
                    opacity: 0.8,
                  }}
                >
                  {item.sms}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ flex: 1, paddingBottom: 5 }}>
          <View>
            <FlatList
              data={dataChat}
              style={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                const date = new Date(item.timeStamp);
                const dateBehind = new Date(
                  dataChat[index == 0 ? index : index - 1].timeStamp
                ).getDate();
                return (
                  <View>
                    {(dateBehind != date.getDate() || index == 0) && (
                      <View
                        style={{
                          alignItems: "center",
                          marginTop: 10,
                          marginBottom: 5,
                        }}
                      >
                        <View
                          style={{
                            width: 100,
                            backgroundColor: "#BCBCBC",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 20,
                            height: 25,
                          }}
                        >
                          <Text style={{ color: "#fff" }}>{`${addLeadingZero(
                            date.getDate()
                          )}/${addLeadingZero(
                            date.getMonth() + 1
                          )}/${date.getFullYear()}`}</Text>
                        </View>
                      </View>
                    )}
                    <View
                      style={{
                        flexDirection:
                          item.role == "QL" ? "row" : "row-reverse",
                      }}
                    >
                      <View
                        style={{
                          minHeight: 40,
                          backgroundColor:
                            item.role == "QL" ? "#fff" : "#3F79DA",
                          borderRadius: 8,
                          paddingHorizontal: 13,
                          marginTop: 5,
                          maxWidth: 280,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            paddingVertical: 4,
                            color: item.role == "QL" ? "#000" : "#fff",
                          }}
                        >
                          {item.sms}
                        </Text>
                        <Text
                          style={[
                            {
                              fontSize: 11,
                              opacity: 0.6,
                              color: item.role == "QL" ? "#000" : "#fff",
                            },
                            item.role == "NV" && { textAlign: "right" },
                          ]}
                        >
                          {`${date.getHours()}:${date.getMinutes()}`}
                        </Text>
                      </View>
                      <View style={{ flex: 1 }} />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 55,
            backgroundColor: "#E1F1FF",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 40,
                borderRadius: 20,
                backgroundColor: "#fff",
                justifyContent: "center",
                width: "90%",
                paddingHorizontal: 15,
                marginRight: 5,
              }}
            >
              <TextInput
                style={{ height: 25, fontWeight: "600" }}
                placeholder="Your meesages..."
              />
            </View>
            <TouchableOpacity
              style={{
                width: "10%",
                alignItems: "center",
              }}
            >
              <Icon name="send" size={24} color={"#24519B"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
