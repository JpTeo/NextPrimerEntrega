"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Boton from "../components/Boton";


export default function Nosotros() {
  
  const router = useRouter()
  
  return (
    <>
      <main className="container m-auto p-6">
        <h1 className="text-3xl font-bold text-center my-8">
          Nuestra Historia
        </h1>
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            Fundada en 1998, JP Shop comenzó como una pequeña tienda familiar en
            el corazón de la ciudad. Con una pasión por la moda y el deporte,
            rápidamente se convirtió en el destino preferido para aquellos que
            buscan la mejor indumentaria y equipamiento deportivo. A lo largo de
            los años, JP Shop ha evolucionado, expandiendo su catálogo para
            incluir una amplia gama de electrodomésticos de última tecnología,
            manteniendo siempre su compromiso con la calidad y el servicio al
            cliente.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Hoy en día, JP Shop es reconocida por su combinación única de
            productos de indumentaria, deportes y tecnología, ofreciendo a sus
            clientes no solo artículos, sino una experiencia de compra completa.
            Con un enfoque en la innovación y las tendencias, seguimos creciendo
            y adaptándonos para satisfacer las necesidades de nuestros clientes
            en todo el país.
          </p>
        </section>
        <div className="flex justify-center my-4">
          <Boton onClick={() => router.replace("/nosotros/equipo")}>Nuestro equipo</Boton>
        </div>{" "}
      </main>
    </>
  );
}

