import React from 'react';
import { StatusBar, View, Text } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <Text>App - GoBarber</Text>
    </View>
  </>
);

export default App;
