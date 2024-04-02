import { useState, useEffect } from "react";

const fetchActiveGameAddress = async () => {
  // Replace with your logic to fetch the address
  const API_ENDPOINT = "https://your-api.com/active-game-address";
  const response = await fetch(API_ENDPOINT);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
};

const useActiveGameAddress = () => {
  const [activeGameAddress, setActiveGameAddress] = useState("");

  useEffect(() => {
    let isMounted = true; // Track the mounted state

    const getActiveGameAddress = async () => {
      try {
        const address = await fetchActiveGameAddress();
        if (isMounted) {
          setActiveGameAddress(address);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to fetch active game address:", error);
        }
      }
    };

    getActiveGameAddress();

    return () => {
      isMounted = false; // Cleanup by updating the mounted state
      setActiveGameAddress(""); // Optionally reset the address on unmount
    };
  }, []);

  return activeGameAddress;
};

export default useActiveGameAddress;
