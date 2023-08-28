import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { TextInput } from "react-native-paper";

export default function Dispatch() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#dce4e8",
          paddingHorizontal: 15,
          justifyContent: "flex-end",
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: 50 }} />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Dispatch List
          </Text>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#315da8" }}>
              Refresh
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 8.5, backgroundColor: "#fbfcfe" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 40,
            borderRadius: 20,
            marginVertical: 3,
            borderWidth: 1,
            borderColor: "#70787c",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 40,
              width: 50,
              borderRightWidth: 1,
              borderRightColor: "#70787c",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="chevron-left" size={30} color="#006780" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>18/08/2023</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 40,
              width: 50,
              borderLeftWidth: 1,
              borderLeftColor: "#70787c",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="chevron-right" size={30} color="#006780" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Lệnh: HP-001/T09.19</Text>
          <Text>Loại Xe: 20T</Text>
          <Text>{"<Hai Phong WH>"}</Text>
          <Text>Kiểm tra xe:</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>TX:</Text>
            <Text>Passed</Text>
            <Text style={{ marginHorizontal: 3 }}>|</Text>
            <Text>QL:</Text>
            <Text>Passed</Text>
          </View>
          <Text>Tình trạng: Kết thúc</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
