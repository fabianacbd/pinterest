import "./Header.css";

const template = () => `
<img src="Pinterest-logo.png" alt="Logo de pinterst" style="width:50px" </>
<h1>Pinterest</h1>
<input type="text" id="searchInput" placeholder="Qué buscamos hoy?" />
<button id="searchBtn">Buscar</button>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};


export default Header;