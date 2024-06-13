
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address"),
  password: yup.string().min(6, "Min length is 6 symbols"),
});

export default loginSchema;