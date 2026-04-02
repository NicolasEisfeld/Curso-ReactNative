import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';


const Button = ({ title, onPress, color = '#FFFFFF', style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    width:'200px',
    height:'200px'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Button;
