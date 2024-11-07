"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import log from '../../../public/loginn.png'
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful!");
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#3C3744] via-[#3D52D5] to-[#B4C5E4]">
      {/* Left Side: Image */}
      <div className="w-1/2 hidden lg:block">
        <Image
          src={log} // Replace with your image URL
          width={300}
          height={200}
          alt="Login Image"
          className="w-auto h-[100vh] object-cover rounded-l-lg"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-6 sm:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm space-y-6">
          <h1 className="text-4xl font-semibold text-center text-[#3C3744]">
            {loading ? "Loading..." : "Login"}
          </h1>
          <hr className="my-4 border-[#3C3744]" />

          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#3C3744]">
              Email Address
            </label>
            <input
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-[#3C3744] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D52D5] text-[#090C9B]"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-[#3C3744]">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-[#3C3744] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D52D5] text-[#090C9B]"
            />
          </div>

          <button
            onClick={onLogin}
            disabled={buttonDisabled || loading}
            className={`w-full py-3 mt-4 text-white rounded-lg ${buttonDisabled || loading ? 'bg-[#3C3744]' : 'bg-[#090C9B] hover:bg-[#3D52D5]'} focus:outline-none focus:ring-2 focus:ring-[#3D52D5]`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-[#3C3744]">
              Do not have an account?{' '}
              <Link href="/signup" className="text-[#3D52D5] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
