import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import ColorContext from '../../state/ColorState';

const BottomBarOption = ({icon, iconSelected, navigation, screen, selectedScreen}) => {
  const {themeColors} = useContext(ColorContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
    >
      <View style={styles.iconColumn}>
        <IconButton
          icon={selectedScreen === screen ? iconSelected: icon}
          iconColor={selectedScreen === screen ? themeColors.rawTertiaryColor : themeColors.rawPrimaryColor}
          size={20}
          style={styles.iconButton}
        />
        <Text style={[styles.iconText, selectedScreen === screen ? themeColors.tertiaryColor : themeColors.primaryColor]}>{screen}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    margin: 0,
  },
  iconColumn: {
    alignItems: "center",
  },
});

export default BottomBarOption;