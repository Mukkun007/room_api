import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de la connexion");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      alert("Connexion réussie !");
    } catch (error) {
      setErrorMessage("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4">
        Pas encore inscrit ?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Créez un compte ici
        </Link>
      </p>
    </div>
  );
};

export default Login;
