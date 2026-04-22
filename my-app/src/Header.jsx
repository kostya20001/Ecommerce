import './Header.css';

function Header({props}) {
    return (
    <header className='header'>
      <div>
        <div>
          <button>TechStore</button>
          <nav>
            <a href="TV"> TV </a>
            <a href="Phone"> Phone </a>
            <a href="Laptop"> Laptop </a>
          </nav>
        </div>
        <div>
          <button>Корзина</button>
          <button>Профиль</button>
        </div>
      </div>
    </header>
    );
}

export default Header;