import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from './res/values/colors';
import strings from './res/values/strings';
import dimen from './res/values/dimen';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{strings.startGreeting}</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>{strings.startWithKakao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>{strings.startWithNaver}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>{strings.startWithFacebook}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 2,
  },
  boxContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: dimen.largeFontSize,
    fontWeight: 'bold',
    color: colors.blue,
    marginTop: dimen.startTitle.marginTop,
  },
  image: {
    height: dimen.startAppImage.height,
    width: dimen.startAppImage.width,
    marginTop: dimen.startAppImage.marginTop,
  },
  box: {
    height: dimen.startWithAccountBox.height,
    width: dimen.startWithAccountBox.width,
    borderWidth: dimen.borderWidth,
    borderRadius: dimen.borderRadius,
    borderColor: colors.greyBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dimen.startWithAccountBox.marginBottom,
  },
  text: {
    fontSize: dimen.regularFontSize,
    color: colors.greyText,
  },
});
