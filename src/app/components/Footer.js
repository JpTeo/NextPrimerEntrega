import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Ayuda</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Envíos y Entregas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cambios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Acerca de JP Shop</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Propósito
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Noticias
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Novedades JP Shop</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Promociones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Encontrá el Mejor Electrodoméstico
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ¿Cómo Sigo mi Pedido?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
