import { StyleSheet } from "react-native";

const container = () => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 120,
  }
});

export const noBottomBarContainer = () => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  }
});

export default container;