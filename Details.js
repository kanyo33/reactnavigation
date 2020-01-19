import React from 'react';
import { View, Text, Button} from 'react-native';


class DetailsScreen extends React.Component {
    render() {
        const title = this.props.navigation.getParam('title')
        const content = this.props.navigation.getParam('content')
        
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text>itemId: {JSON.stringify(title)}</Text>
      <Text>otherParam: {JSON.stringify(content)}</Text>
        </View>
      );
    }
  }

  export default DetailsScreen