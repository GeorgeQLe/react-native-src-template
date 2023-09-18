import { useContext, useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import ColorContext from '../../state/ColorState';
import container from '../../styles/containers/container';

const LoginScreen = ({navigation}) => {
  const {themeColors} = useContext(ColorContext);
  const [email, setEmail] = useState("");
  return (
    <View style={[container, themeColors.primaryBackground]}>
      <TextInput
        autoFocus={true}
        blurOnSubmit={false}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={() => Keyboard.dismiss()}
        placeholder='Your Email'
        returnKeyType="done"
        style={styles.textInput}
        value={String(email)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default LoginScreen;