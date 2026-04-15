import { useState } from "react";
// import { CartIcon } from "../Icons/cartIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { newUser } from "../api/login";
import { useNavigate } from "react-router";
import { ButtonLoader } from "./loader";
import { toast } from "react-hot-toast";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: newUser,
    onSuccess: (data) => {
      console.log("login successful", data);
      toast.success("Login successful", { duration: 1000 });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1100);
    },

    onError: (error) => {
      console.log("login failed", error);
      toast.error("Login failed");
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ username, password });
  };
  return (
    <div className="h-screen p-5 flex flex-col items-center justify-center bg-[url('/background-image.svg')] bg-cover bg-center bg-no-repeat bg-[#244BC5]">
      <div className="md:mb-5 mb-7">
        {/* <CartIcon /> */}
        <h1 className="text-white font-medium md:text-[50px] text-[30px]">
          Welcome
        </h1>
      </div>

      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="p-6 w-full flex flex-col items-center">
          <input
            className="w-full p-2 mb-4 border border-white rounded text-white outline-0"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="password"
            className="w-full p-2 mb-10 border border-white rounded text-white outline-0"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-white text-[#2148C0] p-2 rounded"
          >
            {mutation.isPending ? <ButtonLoader /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};
