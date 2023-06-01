import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://cerulean-marlin-wig.cyclic.app";

const useActivity = () => {
  const [archived, setArchived] = useState([]);
  const [unarchived, setUnarchived] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/activities`).then((d) => {
      d.forEach((element) => {
        console.log(element);
      });
    });
  }, []);
};

export default useActivity;
