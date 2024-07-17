import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title?: string;
  type?: 'solid' | 'outline';
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, type, ...touchableProps }, ref) => {
    return type === 'outline' ? (
      <TouchableOpacity
        ref={ref}
        style={[
          styles.button,
          {
            backgroundColor: 'transparent',
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: 'transparent',
          },
        ]}
        {...touchableProps}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity ref={ref} style={styles.button} {...touchableProps}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#4425F5',
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,

    textAlign: 'center',
    fontFamily: 'gotham',
  },
});
