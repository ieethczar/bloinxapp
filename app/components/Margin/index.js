import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from "react-native";

const Margin = ({ size, children, style }) => {
  const styles = StyleSheet.create(typeof(size) === 'number' ? {
    container: {
      marginBottom: size,
    }
  } : {
    container: {
      marginTop: size[0],
      marginRight: size[1],
      marginBottom: size[2],
      marginLeft: size[3],
    }
  });

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      {children}
    </View>
  )
};

Margin.defaultProps = {
  size: 20,
  style: {},
}

Margin.propTypes = {
  size(props, propName, componentName) {
    const permitValues = [10, 14, 20, 24, 36, 50];

    if(!(propName in props)) {
      return new Error(`${componentName}: Missign ${propName}`);
    }
    if(typeof(props[propName]) !== 'number' && props[propName].length !== 4) {
      return new Error(`${componentName}: Necesary structure not found: [topMarginValue, rightMarginValue, bottomMarginValue, leftMarginValue]`)
    }
    if(typeof(props[propName]) === 'number' && !permitValues.includes(props[propName])) {
      return new Error(`${componentName}: The value is not a permit value: ${permitValues}, you are using ${props[propName]}`)
    }
  },
  children: PropTypes.node.isRequired,
};
export default Margin;
