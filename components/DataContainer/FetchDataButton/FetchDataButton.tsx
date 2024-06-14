"use client";

import { Button } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export type FetchDataButtonProps = {
  fetchData: () => void;
  className?: string;
};

export const FetchDataButton = ({
  children,
  fetchData,
  ...otherProps
}: PropsWithChildren<FetchDataButtonProps>) => {
  return (
    <Button variant="contained" onClick={fetchData} {...otherProps} color="primary">
      {children}
    </Button>
  );
};
