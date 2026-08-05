import { useEffect, useState } from "react";
import { subscribeMessages } from "../services/messageService";

export default function useMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeMessages((data) => {
      setMessages(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { messages, loading };
}