import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Linking } from 'react-native';

const data = require('./city-data.json');
const icon = require('./assets/chicago.png')

export default function App() {
  const renderItem = ({ item }) => {
    return (<View style={styles.row}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.url} onPress={() => Linking.openURL(item.fullUrl)}>{item.shortUrl}</Text>
      </View>
    </View>);
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>City Guide</Text>
      <FlatList data={data} renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  icon: {
    height: 45,
    width: 45,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  name: {
    color: '#122737',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8
  },
  address: {
    color: '#122737',
    fontSize: 16,
    paddingBottom: 0
  },
  url: {
    color: '#122737',
    fontSize: 16,
    fontStyle: 'italic'
  }
});
