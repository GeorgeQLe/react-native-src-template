import AsyncStorage from "@react-native-async-storage/async-storage";

const retrieveContextFromStorage = async (storageKey) => {
  console.log("retrievePlayerInfoFromStorage");
  try {
    // Fetch the stored object from AsyncStorage
    const storedObject = await AsyncStorage.getItem(storageKey);
    // Parse the stored object into a JavaScript object
    let context = null;
    // Check if the stored object is null
    if (storedObject !== null) {
      // If it is not null, parse it into a JavaScript object
      context = JSON.parse(storedObject);
    }
    console.log("Stored object:", context);
    return context;
  } catch (error) {
    console.log("Error retrieving player info from AsyncStorage:", error);
    return undefined;
  }
};

export default retrieveContextFromStorage;