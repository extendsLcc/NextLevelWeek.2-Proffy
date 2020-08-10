import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">

            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/7769378?s=460&u=d010e2c207bf33d16d04b5da12a92df1bb55289c&v=4"
                    alt="Extendslcc"/>
                <div>
                    <strong>Extends Lcc</strong>
                    <span>Teste</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br/> <br/>
                Ab commodi deserunt eligendi enim, fugiat ipsam iusto nihil odio, placeat recusandae saepe
                soluta ut velit? Autem harum maxime praesentium sint ullam?
            </p>

            <footer>
                <p>
                    <span>Preço/Hora</span>
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    <span>Entrar em contato</span>
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;