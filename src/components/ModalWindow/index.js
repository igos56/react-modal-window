import { useState } from "react";
import Loader from "../Loader";

import "./styles.scss";

const ModalWindow = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="wrapper">
            <button className="btn" onClick={() => setActive(true)}>Open Modal</button>
            {active && (
                <div className="modal">
                    <section className="modal-content">
                        <h2>Я модальное окно</h2>
                        <p>
                            Я реализовано на <span className="accent-big">React</span> c использованием хука <span className="accent-big">useState()</span>
                        </p>
                        <p className="accent-small">
                            Он позволяет созать переменную состояния и менять это состояние.
                            useState возвращает массив, где первый элемент - начальное значение
                            переменной состояния; второй элемент массива - функция, которая
                            нужна для обновления состояния.
                            При объявлении переменных очень удобно использовать деструктуризацию,
                            т.к. из useState возвращается массив.
                        </p>
                        <Loader/>
                    </section>
                    <button className="btn" onClick={() => setActive(false)}>Close Modal</button>
                </div>
            )}
        </div>  
    );
}

export default ModalWindow;