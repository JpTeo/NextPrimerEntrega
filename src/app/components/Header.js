import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative w-full h-screen">
      <Image
        src="/image/bicin.jpg" // Asegúrate de que la ruta sea correcta
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Link href="/productos">
          <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
            Productos
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
