import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({

    fullName:"",
    email:"",
    password:"",

  });

  const { signup, isSignigUp } = useAuthStore();

  const validateForm = () => {}
  const validateForm = (e) => {
    e.preventDefault()
  }





  return (
    <div>
      signup
    </div>
  )
};

export default SignUpPage
