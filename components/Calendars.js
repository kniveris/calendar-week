import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet,Text } from 'react-native';
import { TimelineCalendar, EventItem } from '@howljs/calendar-kit';
import { FAB } from '@rneui/themed';
import AddRunTime from './AddRuntime'

const exampleEvents: EventItem[] = [
  {
    id: '1',
    title: 'Event 1',
    start: '2024-01-20T09:00:05.313Z',
    end: '2024-01-20T12:00:05.313Z',
    color: '#A3C7D6',
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2024-01-20T11:00:05.313Z',
    end: '2024-01-20T14:00:05.313Z',
    color: '#B1AFFF',
  },
];

const Calendar = () => {

  const [runTimeIsVisible, setRunTimeVisible] = useState(false);


  const addEvent = () => {
    setRunTimeVisible(!runTimeIsVisible)
    console.log(runTimeIsVisible)


  };

  useEffect(() => {
    // You can perform any additional logic if needed
  }, [runTimeIsVisible]);



  return (
    // <Text>

    <SafeAreaView style={styles.container}>
      <TimelineCalendar 
        viewMode="week"
        // isShowHeader={false}
        // renderDayBarItem=''
        allowPinchToZoom
        // allowDragToCreate={true}
        events={exampleEvents}
         />

       


      <FAB
        visible={true}
        icon={{ name: 'add', color: 'blue' }}
        size="large"
        placement="right"
        color="white"
       // raised={true}
       // type="outline"
        style={styles.addButton}
        onPress={addEvent}
      />  
       
      <AddRunTime
        visible={runTimeIsVisible}
        onClose={addEvent}
       />


    </SafeAreaView>
    // </Text>

  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: { 
    flex: 1, backgroundColor: '#FFF' 
  },
  addButton: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

});