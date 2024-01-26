import React, { useState, useEffect } from 'react';
import {  Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddRunTime = ({ visible, onClose }) => {
  const [startTime, onChangeNumber] = React.useState('');

  const [selectedDays, setSelectedDays] = useState([]);
  const daysName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const dayPressed = (day) => {
    if (selectedDays.includes(day)) {
      console.log(selectedDays)
      // If selected, remove it from the array
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      // If not selected, add it to the array
      setSelectedDays([...selectedDays, day]);
    }
  }


  //Stuff for TimePicker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
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
                  onPress={dayPressed(letter)}
                  style={({ pressed }) => [
                    styles.button,
                    {
                      backgroundColor: pressed ? 'lightgray' : 'white',
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
                value={date}
                mode='time'
                // display='spinner'
                onChange={onChange}
                style={styles.timePicker}
                minuteInterval={5}
              />

            </View>
            <View style={styles.endTime}>
              <Text>End Time: </Text>
              <DateTimePicker
                value={date}
                mode='time'
                // display='spinner'
                onChange={onChange}
                style={styles.timePicker}
                minuteInterval={5}

              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>

        </View>
      </Modal>


  );
};

const styles = StyleSheet.create({

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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modal: {

  }
});

export default AddRunTime;
