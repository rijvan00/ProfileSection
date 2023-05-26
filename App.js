import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
export default function App() {
  console.log("App Executed");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="chevron-left" color="#ccc" size={25} type="entypo" />
          <Text style={styles.headerText}>Edit Profile</Text>
          <Icon name="edit" color="#ccc" size={25} type="entypo" />
        </View>
        <View style={styles.avatar}>
          <Image
            style={styles.avatarImage}
            source={{
              uri: "https://th.bing.com/th?q=Taare+Zameen+Par+Painting&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            }}
          />
          <Text style={styles.name}>Pradumna Mishra</Text>

          <Text style={styles.designation}>Yard Minister</Text>
        </View>
        <Text>{`\n`}</Text>
        <Text style={styles.profile}>Email</Text>
        <TextInput
          style={styles.Input}
          value="webmaster.tech@flyingchital.com"
        />
        <Text style={styles.profile}>Phone Number</Text>
        <TextInput style={styles.Input} value="9876543210" />
        <Text style={styles.profile}>Name</Text>
        <TextInput style={styles.Input} value="Praduman Mishra" />
        <Text style={styles.profile}>DOB</Text>
        <View style={styles.dob}>
          <TextInput style={styles.InputDay} value="22" />
          <TextInput style={styles.InputMonth} value="September" />
          <TextInput style={styles.InputYear} value="1994" />
        </View>
        <Text>{`\n`}</Text>
        <Text style={styles.joined}>Joined On 22 April'23</Text>
        <View style={styles.buttoncontainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="md-cube" size={24} color="black" />
              <Text style={styles.buttonText}>Module</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Ionicons name="md-apps" size={24} color="black" />
              <Text style={styles.buttonText}>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Ionicons name="md-person" size={24} color="black" />
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "whitesmoke",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 35,
  },
  headerText: {
    color: "black",
    padding: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
  avatar: {
    flex: 0.4,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  avatarImage: { width: 75, height: 75, borderRadius: 50 },
  name: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
  designation: {
    fontSize: 14,
  },
  profile: {
    paddingLeft: 20,
    paddingTop: 15,
    fontWeight: "300",
  },

  Input: {
    textDecorationColor: "black",
    borderBottomWidth: 1,
    width: 330,
    marginLeft: 20,
    paddingTop: 1,
    fontSize: 16,
    fontWeight: "400",
  },
  dob: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 42,
    marginLeft: 5,
  },
  InputDay: {
    textDecorationColor: "black",
    borderBottomWidth: 1,
    width: 70,
    marginLeft: 20,
    paddingTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
  InputMonth: {
    textDecorationColor: "black",
    borderBottomWidth: 1,
    width: 100,
    marginLeft: 20,
    paddingTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
  InputYear: {
    textDecorationColor: "black",
    borderBottomWidth: 1,
    width: 70,
    marginLeft: 20,
    paddingTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
  joined: {
    padding: 20,
    fontWeight: "300",
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "space-around",
    marginTop: 55,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    marginLeft: 5,
  },
});
