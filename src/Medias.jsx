import { useState, useEffect, useDebugValue } from "react";

export const getMedias = () => {
  const [medias, setMedias] = useState(null);

  useDebugValue(medias ? `${medias.name}` : "Loading...");

  useEffect(() => {
    async function fetchMedias() {
      const response = await fetch("/api/medias");
      const data = await response.json();
      // console.log(data);
      setMedias(data);
    }

    fetchMedias();
  }, []);

  return medias;
};

export default getMedias;