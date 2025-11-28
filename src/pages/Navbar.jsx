import React from 'react';
import { Link } from 'react-router-dom';
import v from "../assets/vector2.png"
import v2 from "../assets/vector3.png";
import v3 from "../assets/vector4.png";
import v4 from "../assets/vector5.png";
import v5 from "../assets/vector6.png";
import cs from "./Navbar.module.css"

function Navbar() {
    return (
      <div>
        <div className={cs.wul}>
          <div>
            <ul>
              <li>
                <Link to="/oкомпании"> О компании </Link>
              </li>
              <li>
                <Link to="/доставкаИоплата"> Доставка и оплата </Link>
              </li>
              <li>
                <Link to="/">Возврат </Link>
              </li>
              <li>
                <Link to="/"> Гарантии </Link>
              </li>
              <li>
                <Link to="/"> Контакты </Link>
              </li>
              <li>
                <Link to="/">Блог </Link>
              </li>
            </ul>
          </div>
          <div className={cs.ws}>
            <span>8 (800) 890-46-56</span>
            <span>Заказать звонок</span>
          </div>
        </div>
        <div className={cs.navp}>
          <div className={cs.navp1}>
            <img src={v} alt="" />
            <span>NORNLIGHT</span>
          </div>
          <div className={cs.navp2}>
            <button>
              <img src={v2} alt="" /> Каталог
            </button>
            <input type="text" placeholder="Поиск по товарам" />
            <div>
              {" "}
              <img src={v3} alt="" /> <p>Избранное</p>
            </div>
            <div>
              {" "}
              <img src={v4} alt="" /> <p>Сравнение</p>
            </div>
            <div>

              <img src={v5} alt="" /> <p>Корзина</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
}

export default Navbar;
