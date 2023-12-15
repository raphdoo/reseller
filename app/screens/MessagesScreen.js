import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Title1',
    description: 'Message1',
    image: require('../assets/dp.jpg'),
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Message2',
    image: require('../assets/dp.jpg'),
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Message3',
    image: require('../assets/dp.jpg'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setrefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);

    setMessages(newMessages);
  };

  return (
    <Screen>
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
      {/* </GestureHandlerRootView> */}
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
