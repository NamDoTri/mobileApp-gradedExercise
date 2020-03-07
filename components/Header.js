import React from 'react';
import {Header, Text} from 'react-native';

const Header = (props) => {

    return (<Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        leftComponent={
          <SimpleIcon
            name="menu"
            color="#34495e"
            size={20}
          />
        }
        centerComponent={{ text: 'HOME', style: { color: '#34495e' } }}
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-around',
        }}
      />)


}

export default Header;