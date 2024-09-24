"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import Boton from '@/app/components/Boton';


function Equipo() {
    
  const router = useRouter()
  
  return (
    <>
      <div className="flex justify-center my-4">
        <h1>Pagina en construcción</h1>
      </div>
       <div className="flex justify-center mt-4 mb-2">
      <Boton onClick={() => router.back()}>Volver</Boton>
      </div>
    </>
  );
}

export default Equipo