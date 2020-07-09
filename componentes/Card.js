import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...estilos.card, ...props.estilos}}>
        {props.children}
    </View>
  );
};

const estilos = StyleSheet.create({ 
  card: { 
    alignItems: 'left', 
    shadowOffset: { width: 5, height: 5 }, 
    shadowRadius: 6, 
    shadowOpacity: 0.32, 
    backgroundColor: '#8b0000', 
    elevation: 4, 
    padding: 12, 
    borderRadius: 12 
  } 
});

export default Card;