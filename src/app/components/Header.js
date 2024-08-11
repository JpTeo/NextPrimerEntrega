import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative w-full h-screen p-60">
      <Image
        src="/image/bicin.jpg"
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
 
    </header>
  );
};

export default Header;
