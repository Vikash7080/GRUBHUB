import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnlineStatus(true);
      toast.success("🟢 You are back online!");
    };

    const handleOffline = () => {
      setOnlineStatus(false);
      toast.error("🔴 You are offline! Please check your connection.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
