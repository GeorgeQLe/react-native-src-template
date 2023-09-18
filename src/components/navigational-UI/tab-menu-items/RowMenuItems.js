import { useContext } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import ColorContext from '../../../state/ColorState';

const RowMenuItems = ({leftButtonIcon, leftButtonLabel, leftButtonOnPress, rightButtonIcon, rightButtonLabel, rightButtonOnPress}) => {
  const {themeColors} = useContext(ColorContext);
  return (
    <View style={styles.buttonRow}>
      <TouchableHighlight
        activeOpacity={0.6}
        onPress={leftButtonOnPress}
        style={[styles.selectButton, themeColors.secondaryBackground, themeColors.shadowColor]}
        underlayColor={themeColors.rawTertiaryColor}
      >
        <View style={styles.buttonColumn}>
          <IconButton
            icon={leftButtonIcon}
            iconColor={themeColors.rawPrimaryColor}
            size={50}
          />
          <Text style={[styles.selectText, themeColors.primaryColor]}>{leftButtonLabel}</Text>
        </View>
      </TouchableHighlight>
      {
        (rightButtonIcon && rightButtonLabel && rightButtonOnPress) && (
          <TouchableHighlight
            activeOpacity={0.6}
            onPress={rightButtonOnPress}
            style={[styles.selectButton, themeColors.secondaryBackground, themeColors.shadowColor]}
            underlayColor={themeColors.rawTertiaryColor}
          >
            <View style={styles.buttonColumn}>
              <IconButton
                icon={rightButtonIcon}
                iconColor={themeColors.rawPrimaryColor}
                size={50}
              />
              <Text style={[styles.selectText, themeColors.primaryColor]}>{rightButtonLabel}</Text>
            </View>
          </TouchableHighlight>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  buttonColumn: {
    alignItems: 'center',
  },
  buttonRow: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  selectButton: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    paddingBottom: 20,
    shadowOffset: {
      height: 3,
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '40%',
  },
  selectText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default RowMenuItems;