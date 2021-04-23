import * as React from 'react';
import { FlatList } from 'react-native';

import Item from './Item';

const List = ({ data }) => {  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item
          title={item.title}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default List;