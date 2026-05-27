import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';


const ButtonHighlight = ({ title , cor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderWidth: 5,
          borderColor: cor,
          backgroundColor: 'white',
        },
      ]}
    >
      <Text style={[styles.text, { color: '#777' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '100px',
    width:'200px',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default ButtonHighlight;
