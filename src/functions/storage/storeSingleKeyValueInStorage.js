import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeSingleKeyValueInStorage(keyValue, storageKey) {
  console.log("Storing one value in AsyncStorage:", keyValue, "in", storageKey);
  try {
    // Fetch the stored object from AsyncStorage
    const storedObject = await AsyncStorage.getItem(storageKey);
    // Parse the stored object into a JavaScript object
    let context = null;
    // Check if the stored oject is null
    if (storedObject !== null) {
      // If it is not null, parse it into a JavaScript object
      context = JSON.parse(storedObject);
    }
    console.log("Stored object:", context);
    // Set the value of the key in the JavaScript object
    if(context) {
      context[Object.keys(keyValue)[0]] = keyValue[Object.keys(keyValue)[0]];
      console.log("Updated stored object:", context);
      await AsyncStorage.setItem(storageKey, JSON.stringify(context));
    } else {
      console.log("No stored object found, creating one with", keyValue, "at", keyValue.key, "in", storageKey);
      await AsyncStorage.setItem(storageKey, JSON.stringify(keyValue));
    }
  } catch (error) {
    console.log("Error storing one value in AsyncStorage:", keyValue.key, ":", error);
  }
}