"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { LoginSchema, SignUpSchema } from "@/lib/validation/auth";
import { useState, useEffect } from "react";

export default function AuthModal() {
  const { isModalOpen, modalMode, closeModal, openModal, login } = useAuth();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData({});
    setErrors({});
  }, [modalMode, isModalOpen]);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  if (!isModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const schema = modalMode === "login" ? LoginSchema : SignUpSchema;
    const result = schema.safeParse(formData);
    if (!result.success) {
      const formatted: Record<string, string> = {};
      result.error.issues.forEach((issue) => { formatted[String(issue.path[0])] = issue.message; });
      setErrors(formatted);
      return;
    }
    if (modalMode === "login") {
      login({ id: "mock-123", name: "Arjun Nair", username: formData.identifier, email: formData.identifier });
    } else {
      login({ id: "mock-456", name: formData.fullName, username: formData.username, email: formData.email });
    }
  };

  const Field = ({ label, name, type = "text", placeholder, optional = false }: { label: string; name: string; type?: string; placeholder?: string; optional?: boolean }) => (
    <div className="mb-4">
      <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-2">
        {label} {optional && <span className="text-foreground/25 normal-case tracking-normal">(optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name] || ""}
        onChange={handleChange}
        className={`w-full px-5 py-3.5 bg-foreground/[0.03] border font-mono text-sm ${
          errors[name] ? "border-red-400 focus:ring-red-400" : "border-foreground/10 focus:ring-foreground"
        } rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
      />
      {errors[name] && (
        <p className="font-mono text-[10px] font-bold text-red-500 mt-1.5 ml-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-md" onClick={closeModal} />

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 bg-foreground/5 hover:bg-foreground/10 rounded-full transition-colors z-20"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        <div className="p-8 md:p-10 overflow-y-auto">
          <div className="mb-8">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-2">
              {modalMode === "login" ? "Resume Play." : "Your Move."}
            </h2>
            <p className="font-mono text-xs text-foreground/40">
              {modalMode === "login"
                ? "Enter your credentials to access the forum."
                : "Create your EnPassant account. Track your progress, connect with players."}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {modalMode === "login" ? (
              <>
                <Field label="Email or Username" name="identifier" />
                <Field label="Password" name="password" type="password" />
                <div className="flex justify-end mb-6 -mt-1">
                  <a href="#" className="font-mono text-[10px] font-bold text-foreground/30 hover:text-foreground transition-colors">
                    Forgot password?
                  </a>
                </div>
              </>
            ) : (
              <>
                <Field label="Full Name" name="fullName" />
                <Field label="Email Address" name="email" type="email" />
                <Field label="Username" name="username" />
                <Field label="Password" name="password" type="password" />
                <Field label="Confirm Password" name="confirmPassword" type="password" />
                <div className="mb-5 bg-foreground/[0.02] p-5 rounded-xl border border-foreground/5">
                  <Field label="Chess.com / Lichess Handle" name="chessUsername" optional placeholder="e.g. magnuscarlsen" />
                  <p className="font-mono text-[10px] text-foreground/30 -mt-2">
                    Link your handle to pull ratings and games into your community profile.
                  </p>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-foreground text-white rounded-full px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-foreground/80 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {modalMode === "login" ? "Log In" : "Create Account"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </form>

          <div className="mt-6 text-center">
            {modalMode === "login" ? (
              <p className="font-mono text-[10px] text-foreground/40">
                No account?{" "}
                <button onClick={() => openModal("signup")} className="font-bold text-foreground hover:underline">Sign up</button>
              </p>
            ) : (
              <p className="font-mono text-[10px] text-foreground/40">
                Already registered?{" "}
                <button onClick={() => openModal("login")} className="font-bold text-foreground hover:underline">Log in</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
