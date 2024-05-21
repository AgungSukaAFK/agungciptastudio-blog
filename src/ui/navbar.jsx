import Image from "next/image";

export default function navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <Image
            src="/web-light-AgungCipta.png"
            alt="Agungcipta logo"
            width={60}
            height={60}
            className="image-logo"
          />
        </div>
        <div className="menu">X</div>
      </nav>
    </div>
  );
}
