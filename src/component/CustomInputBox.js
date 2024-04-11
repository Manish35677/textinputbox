import {View, Text, TextInputComponent, TextInput} from 'react-native';
import React, {useState} from 'react';

const CustomInputBox = ({
  placeholder,
  length,
  color,
  placeholderColor,
  size,
  onChangeText,
  value,
  isError,
  keyboardType,
  bg,
  border,
  width,
  height,
  borderColor,
  borderRadius,
  mt,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={{
        width: width ? width : '90%',
        alignSelf: 'center',
        marginTop: mt ? mt : 10,
      }}>
      <View
        style={{
          width: '100%',
          height: height ? height : 50,
          borderWidth: border ? border : 0,
          justifyContent: 'center',
          paddingLeft: 20,
          borderColor: border
            ? isError
              ? 'red'
              : isFocus
              ? 'green'
              : borderColor
            : '#9e9e9e',
          borderRadius: borderRadius ? borderRadius : 0,
        }}>
        <TextInput
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          value={value ? value : ''}
          onChangeText={txt => onChangeText(txt)}
          placeholder={placeholder ? placeholder : 'Type here..'}
          style={{
            color: color ? color : 'black',
            backgroundColor: bg ? bg : 'white',
            fontSize: size ? size : 14,
          }}
          placeholderTextColor={placeholderColor ? placeholder : '#9e9e9e'}
          keyboardType={keyboardType ? keyboardType : 'default'}
          maxLength={length ? length : 300}
        />
      </View>
      {isError ? (
        <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
          {isError}
        </Text>
      ) : null}
    </View>
  );
};

export default CustomInputBox;
