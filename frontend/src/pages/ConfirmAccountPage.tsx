import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../ApiClient";
import axios from "axios";
import { toast } from "react-toastify";

export default function ConfirmAccountPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/auth/confirm-account/${token}`);
        toast.success(`${response.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/auth/login");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(`${error.response?.data["message"]}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/auth/login");
        } else {
          console.log("Something went wrong");
          toast.error(`Something went wrong`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/auth/login");
        }
        return;
      }
    })();
  }, [token, navigate]);

  return (
    <div className=" bg-teal-blue h-screen flex flex-col items-center pt-12 tablet:gap-20">
      <CircularProgress />
    </div>
  );
}
