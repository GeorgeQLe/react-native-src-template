import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeMultipleKeyValuesInStorage(keyValues, storageKey) {
  console.log("Storing multiple values in AsyncStorage:", keyValues, "in", storageKey);
  try {
    // Fetch the stored object from AsyncStorage
    const storedObject = await AsyncStorage.getItem(storageKey);
    let context = null;
    // Parse the stored object into a JavaScript object
    if (storedObject !== null) {
      // If it is not null, parse it into a JavaScript object
      context = JSON.parse(storedObject);
    }
    console.log("Stored object:", context);
    // Set the value of the key in the JavaScript object
    if(context !== null) {
      Object.entries(keyValues).forEach(([key, value]) => {
        console.log("Setting", key, "to", value);
        context[key] = value;
      });
      console.log("Updated stored object:", context);
      await AsyncStorage.setItem(storageKey, JSON.stringify(context));
    } else {
      // If the stored object is null, create a new object with the key and value
      console.log("No stored object found, creating one with", keyValues, "in", storageKey);
      await AsyncStorage.setItem(storageKey, JSON.stringify(keyValues));
    }
  } catch (error) {
    console.log("Error storing multiple values in AsyncStorage:", keyValues, ":", error);
  }
}