"use client";

import api from "@/api/api";
import { FetchDataButton } from "./FetchDataButton";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/store/stores/api-data-store";
import { HandleChange } from "@/types";

export const DataContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, authorized } = useSelector(selectors.getApiData());

  const handleChange: HandleChange = (name, value) =>
    dispatch(actions.getApiData.success({ name, value }));

  const getData = async () => {
    try {
      handleChange("loading", true);
      const response = await api.getData();

      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      handleChange("loading", false);

      const { data } = response;
      
      handleChange("data", data);
      handleChange("authorized", true);
    } catch (error: any) {
      console.log(error);
      handleChange("loading", false);
      dispatch(actions.getApiData.failure({ authorized: false }));

      console.error("Error fetching data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-3 max-w-[300px]">
      <FetchDataButton fetchData={getData}>Get endpoint data</FetchDataButton>
      {data && authorized && <span className="self-center">{data} 💾</span>}
      {!authorized && authorized !== undefined && <span className="self-center">Unauthorized ❌</span>}
    </div>
  );
};
