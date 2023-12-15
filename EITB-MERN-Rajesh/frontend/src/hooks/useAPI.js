import { useState } from "react";
import { axiosUtil } from "../utils/axiosUtils";
import { toast } from "react-toastify";

let toastConfigure = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
  theme: "light",
};

const useAPI = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (url) => {
    setIsFetching(true);
    try {
      const response = await axiosUtil.get(url);
      console.log(response, url);
      setIsFetching(false);
      if (response.status === 200) {
        return { status: true, data: response.data };
      }
    } catch (err) {
      if (err?.response?.data) {
        toast.error(err.response.data, toastConfigure);
      } else {
        toast.error(err.message | err.error, toastConfigure);
      }
      setIsFetching(false);
      return { status: false };
    }
  };

  const postData = async (...params) => {
    setIsLoading(true);
    try {
      const response = await axiosUtil.post(...params);
      setIsLoading(false);
      if (response.status === 200) {
        return { status: true, data: response.data };
      }
    } catch (err) {
      if (err?.response?.data) {
        toast.error(err.response.data, toastConfigure);
      } else {
        toast.error(err.message || err.error, toastConfigure);
      }
      setIsLoading(false);
      return { status: false };
    }
  };

  return { getData, postData, isFetching, isLoading };
};
export default useAPI;
