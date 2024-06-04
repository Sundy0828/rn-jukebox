export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isNullOrEmpty = (str: string | null | undefined) => {
  return !str || /^\s*$/.test(str);
};

export const isStrongPassword = (password: string) => {
  const regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/])[A-Za-z\d~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]{8,}$/;
  return regex.test(password);
};
