import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import ColorContext from '../../state/ColorState';

const MainScreenHeader = ({headerIcon="", headerText="", headerSize, isTab=false, rightIcon="", rightAction, rightLabel="", tabNavigate, tabParentTitle=""}) => {
  const {themeColors} = useContext(ColorContext);
  return (
    <View>
      {
        isTab && (
            <View style={styles.navigationCouple}>
              <IconButton
                icon='chevron-left'
                iconColor={themeColors.rawPrimaryColor}
                onPress={tabNavigate}
                size={30}
                style={styles.iconButton}
              />
              <TouchableOpacity>
                <Text onPress={tabNavigate} style={[styles.tabParentText, themeColors.primaryColor]}>{tabParentTitle}</Text>
              </TouchableOpacity>
            </View>
        )
      }
      <View style={styles.headerRow}>
        <View style={styles.headerCouple}>
          <Text style={[styles.header, headerSize ? {fontSize: headerSize}: {fontSize: 30},themeColors.primaryColor]}>{headerText}</Text>
          <IconButton
            icon={headerIcon}
            iconColor={themeColors.rawPrimaryColor}
            size={30}
            style={styles.iconButton}
          />
        </View>
        {
          rightIcon !== "" && rightAction ? (
            <IconButton
              icon={rightIcon}
              iconColor={themeColors.rawTertiaryColor}
              onPress={rightAction}
              size={30}
              style={styles.iconButton}
            />
          ) : (
            rightLabel !== "" && rightAction && (
              <TouchableOpacity onPress={rightAction}>
                <Text style={[styles.rightLabel, themeColors.tertiaryColor]}>{rightLabel}</Text>
              </TouchableOpacity>
            )
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  headerCouple: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRow: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  iconButton: {
    margin: 0,
  },
  navigationCouple: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  tabParentText: {
    fontSize: 20,
  },
});

export default MainScreenHeader;