import { StyleSheet, Text, View } from 'react-native';
import MainScreenComponent from '../../components/mainScreen/MainScreenComponent';

const ProfileScreen = ({navigation}) => {
  return (
    <MainScreenComponent
      headerIcon="cog-outline"
      headerSize={30}
      headerText="Profile"
      navigation={navigation}
      selectedScreen="profile"
    >
      <View>
        <Text>Profile Screen</Text>
      </View>
    </MainScreenComponent>
  )
};

const styles = StyleSheet.create({
  
});

export default ProfileScreen;