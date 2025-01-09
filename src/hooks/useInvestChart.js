export const useInvestChartApi = async (API_URL, options = {}) => {
  try {
    const response = await fetch(API_URL, { method: "GET", ...options });
    if (!response.ok) {
      throw new Error(response);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error: error.message };
  }
};

export const useInvestChartLongPolling = async (
  API_URL,
  callback,
  interval = 3000
) => {
  const poll = async () => {
    try {
      const response = await fetch(API_URL, { method: "GET" });
      if (!response.ok) {
        throw new Error(response);
      }

      const data = await response.json();
      if (typeof callback == "function") {
        callback({ data, error: null });
      }
    } catch (error) {
      console.log(error.message);
      if (typeof callback == "function") {
        callback({ data: null, error: error.message });
      }
    } finally {
      setTimeout(poll, interval);
    }
  };
  poll();
};
