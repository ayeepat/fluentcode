// src/pages/Subscription.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscription() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/upgrade", { replace: true });
  }, [navigate]);

  return null;
}