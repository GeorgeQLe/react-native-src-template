import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import ColorContext from '../../../state/ColorState';

const FullRowMenuItem = ({icon, onPress, label}) => {
  const {themeColors} = useContext(ColorContext);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.rowMenuItem, themeColors.secondaryBackground]}>
      <Text style={[styles.rowItemLabel]}>{label}</Text>
      <IconButton
        icon={icon}
        iconColor={themeColors.rawPrimaryColor}
        size={30}
        style={styles.iconButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowMenuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItemLabel: {
    fontSize: 20,
  },
  iconButton: {
    margin: 0
  },
});

export default FullRowMenuItem;