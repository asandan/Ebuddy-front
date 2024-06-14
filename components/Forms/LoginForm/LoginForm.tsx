import { AuthState } from "@/types";
import { HandleChange } from "@/types/functions";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import loginSchema from "./schema/login.schema";
import api from "@/api/api";
import { useRouter } from "next/navigation";
import { auth } from "@/util";
import { signInWithEmailAndPassword } from "firebase/auth";

export type LoginFormProps = {
  handleChange: HandleChange;
} & AuthState;

export const LoginForm: FC<LoginFormProps> = ({
  handleChange,
  email,
  loading,
  password,
  error,
}) => {
  const router = useRouter()
  
  const { errors, touched, handleBlur, isValid, handleSubmit } =
    useFormik({
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: true,
      enableReinitialize: true,
      initialValues: { email, password },
      onSubmit: async (_) => {
        try {
          handleChange("loading", true);
          
          const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          const idToken = await response.user.getIdToken();

          if (response?.user) {
            const sessionResponse = await api.sessionLogin(idToken);

            handleChange("loading", false);
       
            if (sessionResponse.status === 200) {
              router.push("/");
            }
          }

          console.log(response);
        } catch (e: any) {
          handleChange("error", e);
          console.log(e);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <TextField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        error={touched.email && !!errors.email}
        helperText={touched.email && errors.email}
        onBlur={handleBlur}
        onChange={(e) => handleChange("email", e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        error={touched.password && !!errors.password}
        helperText={touched.password && errors.password}
        value={password}
        onBlur={handleBlur}
        onChange={(e) => handleChange("password", e.target.value)}
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading || !isValid}
      >
        Login
      </Button>
     
      {error && <Typography color="error">{error.message}</Typography>}
    </form>
  );
};
