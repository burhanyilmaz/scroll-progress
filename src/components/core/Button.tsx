import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
};

const CustomButton = ({
  title,
  onPress,
  bgColor = 'black',
  textColor = 'white',
}: CustomButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: bgColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 48,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomButton;
