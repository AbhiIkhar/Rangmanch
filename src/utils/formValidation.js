const validate = (formData) => {
  const newErrors = {};
  if (!formData.name) {
    newErrors.name = "Name is required";
  } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
    newErrors.name = "Name can only contain alphabets and spaces";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      formData.password
    )
  ) {
    newErrors.password =
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character";
  }

  return newErrors;
};

export default validate;
