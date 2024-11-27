"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import RecaptchaBadge from "./RecaptchaBadge";

const SignIn: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [resendAvailable, setResendAvailable] = useState(false);

  useEffect(() => {
    if (timer > 0 && step === 3) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendAvailable(true);
    }
  }, [timer, step]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep(2);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setStep(3);
      setTimer(30);
      setResendAvailable(false);
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for OTP validation
    alert("Logged in successfully!");
  };

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#0a0b0d] flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-[#0a0b0d] border-[#8a919e33] border-[1px] p-8 rounded-lg shadow-lg">
          <h1
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--cds-font-display)" }}
          >
            {step === 3
              ? "Enter the 6-digit code we texted to +xx xx xxx xx05"
              : "Sign in to Coinbase"}
          </h1>
          {step < 3 && (
            <form
              onSubmit={step === 1 ? handleEmailSubmit : handlePasswordSubmit}
              className="space-y-6"
            >
              {step >= 1 && (
                <div>
                  <label
                    htmlFor="email"
                    className="pb-2 block text-white font-semibold"
                    style={{ fontFamily: "var(--cds-font-sans)" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full p-3 rounded bg-[#0a0b0d] border-[#8a919e33] border-[1px] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                    style={{ fontFamily: "var(--cds-font-sans)" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={step > 1}
                  />
                </div>
              )}
              {step === 2 && (
                <>
                  <div>
                    <label
                      htmlFor="password"
                      className="pb-2 block text-white font-semibold"
                      style={{ fontFamily: "var(--cds-font-sans)" }}
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="w-full p-3 rounded bg-[#0a0b0d] border-[#8a919e33] border-[1px] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your password"
                      style={{ fontFamily: "var(--cds-font-sans)" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <a href="#" className="text-blue-500 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </>
              )}
              <button
                type="submit"
                className="w-full bg-[#578bfa] text-black font-bold p-3 rounded-full focus:outline-none hover:bg-[#507fe5] transition h-[56px]"
                style={{ fontFamily: "var(--cds-font-sans)" }}
              >
                Continue
              </button>
            </form>
          )}
          {step === 3 && (
            <>
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <p className="text-[#8a919e]">
                  This helps us keep your account secure by verifying that it’s
                  really you.
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg border rounded bg-[#0a0b0d] border-[#8a919e33] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={data}
                      onChange={(e) => handleOtpChange(e.target, index)}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#578bfa] text-black font-bold p-3 rounded-full focus:outline-none hover:bg-[#507fe5] transition h-[56px] mt-4"
                  style={{ fontFamily: "var(--cds-font-sans)" }}
                >
                  Verify
                </button>
              </form>
              <div className="text-center text-gray-500 mt-4">
                {resendAvailable ? (
                  <button className="text-blue-500 hover:underline">
                    Resend code
                  </button>
                ) : (
                  <span>Resend code in {timer}</span>
                )}
              </div>
              <div className="text-center text-gray-500 mt-4">
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={() => setStep(2)}
                >
                  Try another way
                </button>
              </div>
              <div className="text-center text-gray-500 mt-4">
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={() => setStep(1)}
                >
                  Cancel signing in
                </button>
              </div>
            </>
          )}
          {step === 1 && (
            <div
              className="mt-6 text-center text-gray-500"
              style={{ fontFamily: "var(--cds-font-text)" }}
            >
              <p>Not your device? Use a private window.</p>
              <a href="#" className="text-blue-500 hover:underline">
                See our Privacy Policy for more info
              </a>
            </div>
          )}
        </div>
      </div>
      <RecaptchaBadge />
    </div>
  );
};

export default SignIn;
