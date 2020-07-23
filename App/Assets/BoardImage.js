import React from 'react';
import {
    StyleSheet, View, Text, ImageBackground, Image
} from 'react-native';
import { IconsPath } from '.';

export default class BoardImage extends React.Component {
    render() {
        return (
          <Image source={IconsPath.pokerTable} style={{width:400,height:200}}/>
        )
    }

}

