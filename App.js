import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker2'

export default function App() {

    const onDateChange = (date) => {
    // Handle the date change logic here
    console.log('Selected date:', date);
  };

  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      {/*<Text> Still working </Text>*/}
      <CalendarPicker 
        onDateChange={onDateChange} 
        initialView={'week'}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
