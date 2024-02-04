import React, { useState, useEffect } from 'react';
import {  Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import GraySeparator from './GraySeparator';
import OptionsMenuLine from './OptionsMenuLine';

const AddRunTime = ({ 
  visible,
  onSubmit, 
  onCancel, 
  selectedDays, 
  setSelectedDays, 
  startTime, 
  endTime, 
  setStartTime, 
  setEndTime }) => {
  // const [startTime, onChangeNumber] = React.useState('');

  // const [selectedDays, setSelectedDays] = useState([]);
  const daysName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const dayPressed = (day) => {
    if (selectedDays.includes(day)) {
      // If selected, remove it from the array
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));


    } else {
      // If not selected, add it to the array
      setSelectedDays([...selectedDays, day]);

    }
  }


  //Stuff for TimePicker

  const onTimeChange = (event, selectedTime, timeType) => {
    //***TODO***
    //check to make sure end time is after the start time


    const currentTime = selectedTime;

    if (timeType === 'start') {
      setStartTime(currentTime);
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      console.log(`Start Time: ${hours}:${minutes}`);
    } else if (timeType === 'end') {
      setEndTime(currentTime);
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      console.log(`End Time: ${hours}:${minutes}`);
    } else {
      console.log('ERROR: No Time caught')
    }
  };


  const timePicker = (value, timeType) => (
    <DateTimePicker
      value={value}
      mode='time'
      onChange={(event, selectedTime) => onTimeChange(event, selectedTime, timeType)}
      style={styles.timePicker}
      minuteInterval={5}
    />
  );

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={styles.modal}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.weekDaysContainer}>
              <Text>Days to run: </Text>
              {daysName.map((letter, index) => (
                <Pressable
                  key={index}
                  onPress={() => dayPressed(index)}
                  style={({ pressed }) => [
                    styles.pressableDays,
                    {
                    backgroundColor: selectedDays.includes(index) ? 'lightgray' : 'white',
                    },
                  ]}
                  >
                  <Text style={styles.buttonText}>{letter}</Text>
                </Pressable>
              ))}
            </View>

            <GraySeparator />

            <OptionsMenuLine
              text={'Start Time:'}
              item={timePicker(startTime, 'start')}
              key="startTimePicker" 
              />

            <GraySeparator />
            <OptionsMenuLine
              text={'End Time:'}
              item={timePicker(endTime, 'end')}
              key="endTimePicker" 
              />

            <GraySeparator />


            <View style={styles.submitCancel}>
              <Pressable
                style={[styles.button, styles.buttonSubmit]}
                onPress={onSubmit}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancel}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>


          </View>

        </View>
      </Modal>


  );
};

const styles = StyleSheet.create({

  pressableDays: {
    borderRadius: 20,
    padding: 10,
    margin: 2,
  },

  submitCancel: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', // Add this line
    marginBottom: 50,
    marginTop: 20,


  },

  weekDaysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line
    marginTop: 15,



  },

  timePicker: {
    // width:'100%',
    alignSelf: 'flex-end',

  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',

  },
  modalView: {
    width: '100%',
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: 'red',
  },
  buttonSubmit: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modal: {

  }
});

export default AddRunTime;
