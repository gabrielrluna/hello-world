import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  const [contato, setContato] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[5];
          console.log(contact);
        }
      }
    })();

    setContato(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Contacts Module Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
