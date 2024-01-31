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

//shows if modal to add event is visible
  const [addTimeMenuIsVisible, setTimeMenuVisible] = useState(false);

//tracks which days are selected for event
  const [selectedDays, setSelectedDays] = useState([]);

  const closeEvent = () => {
    setTimeMenuVisible(!addTimeMenuIsVisible)
    setSelectedDays([]); // Set selectedDays to an empty array
    setStartTime(new Date()); // Reset startTime to the original value
    setEndTime(new Date()); // Reset endTime to the original value

  };



  const [events, setEvents] = useState(exampleEvents);
  const addNewEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const addEvent = () => {
    // setTimeMenuVisible(!addTimeMenuIsVisible)

    // console.log(selectedDays)
    const hours = startTime.getHours();
    const minutes = startTime.getMinutes();
    console.log(`Start Time: '${hours}':${minutes}`);
    console.log(`2024-01-20T${hours}:${minutes}:00.000Z`)

    const newEvent = {
      id: events.length+1,
      start: `2024-01-20T${hours}:${minutes}:00.000Z`, 
      end: '2024-01-21T06:00:00.000Z',   
      color: '#FFD700', // Replace with your desired color
    };

    addNewEvent(newEvent);

    closeEvent();

    // console.log(events);
  };


  //time that is chosen
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());



//doesnt run without this
  useEffect(() => {
    // You can perform any additional logic if needed
  }, [addTimeMenuIsVisible]);


  const openEventModal = () => {
    setTimeMenuVisible(!addTimeMenuIsVisible)
  }


  return (
    // <Text>

    <SafeAreaView style={styles.container}>
      <TimelineCalendar 
        viewMode="week"
        // isShowHeader={false}
        // renderDayBarItem=''
        allowPinchToZoom
        // allowDragToCreate={true}
        events={events}
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
        onPress={openEventModal}
      />  
       
      <AddRunTime
        visible={addTimeMenuIsVisible}
        onSubmit={addEvent}
        onCancel={closeEvent}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
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