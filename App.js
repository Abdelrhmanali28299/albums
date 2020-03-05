import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import AlbumList from './src/AlbumList';


export default function App() {
  return (
    <>
      <Header headerText="Albums!" />
      <AlbumList />
    </>
  );
}

const styles = StyleSheet.create({
});
