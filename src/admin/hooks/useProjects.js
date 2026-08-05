import { useEffect, useState } from "react";

import { subscribeProjects } from "../services/projectService";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeProjects((data) => {
      setProjects(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    projects,
    loading,
  };
}