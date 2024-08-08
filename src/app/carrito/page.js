"use client";
import React from 'react';

import { useRouter } from "next/navigation";
import Button from '../components/Button';

const Carrrito = () => {
  const router = useRouter();
  return (
    <>
      <h1>Carrrito</h1>
      <button onClick={() => router.back()} className="p-3">
        Volver a la pagina anterior
      </button>
      <button
        onClick={() => router.replace("https://www.google.com/")}
        className="p-3"
      >
        Google
      </button>
    </>
  );
}

export default Carrrito