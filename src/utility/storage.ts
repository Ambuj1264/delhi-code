export function getLocalStorageData(key:string) {
    try {
      const data = localStorage.getItem(key);
      if (data !== null) {
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
      return null;
    }
  }
  