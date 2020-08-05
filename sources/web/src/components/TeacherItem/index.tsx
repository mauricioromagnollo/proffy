import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/38081852?s=460&u=9379ef1347e90747ea8ae6a345c30d26fba1146e&v=4" alt="Maurício Romagnoli"/>
        <div>
          <strong>Maurício Romagnoli</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        <br /><br />
        Ipsam officiis sit laborum tenetur magnam quam neque expedita, soluta reprehenderit maiores earum, provident libero rem eligendi officia deleniti consequuntur! Aperiam, debitis!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp Icon"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
