import React, { useState } from "react";

import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Inscription</h2>
      <form className="flex flex-col gap-4 mt-4">
        <input type="text" placeholder="Nom" className="border p-2 rounded" />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          S'inscrire
        </button>
      </form>
      <p className="mt-4">
        Déjà un compte ?{" "}
        <Link to="/login" className="text-blue-500 underline">
          Connectez-vous ici
        </Link>
      </p>
    </div>
  );
};

export default Register;
