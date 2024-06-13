"use client";

import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { actions, selectors } from "@/store/stores/auth-store";
import { HandleChange } from "@/types/functions";
import { LoginForm } from "@/components/Forms/LoginForm";

export default function LoginPage() {
  const dispatch = useDispatch();

  const authStore = useSelector(selectors.getAuth());

  const handleChange: HandleChange = (name, value) => {
    dispatch(actions.getAuthData.success({ name, value }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-[100vh]">
      <Typography variant="h4">Login</Typography>
      <LoginForm handleChange={handleChange} {...authStore} />
    </div>
  );
}
