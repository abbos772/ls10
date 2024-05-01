import React, { useState, useEffect, useRef } from "react";
import axios from "../../api";

export function useFetch(api, ...rest) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(api)
      .then((res) => setData(res))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  }, [...rest]);
  return {
    data,
    loading,
    err,
  };
}
