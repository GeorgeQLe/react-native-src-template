import { StyleSheet } from "react-native";

const spaceBetweenRow = () => StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export const spaceEvenlyRow = () => StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default spaceBetweenRow;