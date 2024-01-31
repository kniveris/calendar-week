import React, { useState, useEffect } from 'react';
import {  Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddRunTime = ({ visible, onSubmit, onCancel, selectedDays, setSelectedDays, startTime, endTime, setStartTime, setEndTime }) => {
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
                    styles.button,
                    {
                    backgroundColor: selectedDays.includes(index) ? 'lightgray' : 'white',
                    },
                  ]}
                  >
                  <Text style={styles.buttonText}>{letter}</Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.startTime}>
              <Text>Start Time: </Text>
              <DateTimePicker
                value={startTime}
                mode='time'
                // display='spinner'
                onChange={(event, selectedTime) => onTimeChange(event, selectedTime, 'start')}
                style={styles.timePicker}
                minuteInterval={5}
              />

            </View>
            <View style={styles.endTime}>
              <Text>End Time: </Text>
              <DateTimePicker
                value={endTime}
                mode='time'
                // display='spinner'
                onChange={(event, selectedTime) => onTimeChange(event, selectedTime, 'end')}
                style={styles.timePicker}
                minuteInterval={5}

              />
            </View>
            <View style={styles.submitCancel}>
              <Pressable
                style={[styles.button, styles.buttonSubmit]}
                onPress={onSubmit}>
                <Text style={styles.textStyle}>Set Time</Text>
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

  submitCancel: {
    flexDirection: 'row',
    alignItems: 'center',    
  },

  weekDaysContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  endTime: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },

  timePicker: {
    width:'50%',
  },

  startTime: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
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
    padding: 35,
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
