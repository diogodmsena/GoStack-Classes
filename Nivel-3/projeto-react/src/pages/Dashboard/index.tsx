import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img 
            src="https://avatars2.githubusercontent.com/u/59977017?s=460&u=d325a44ecbbf380da68ea0f200fcea7e5b9be0ab&v=4" 
            alt="Diogo Sena"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="">
          <img 
            src="https://avatars2.githubusercontent.com/u/59977017?s=460&u=d325a44ecbbf380da68ea0f200fcea7e5b9be0ab&v=4" 
            alt="Diogo Sena"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="">
          <img 
            src="https://avatars2.githubusercontent.com/u/59977017?s=460&u=d325a44ecbbf380da68ea0f200fcea7e5b9be0ab&v=4" 
            alt="Diogo Sena"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="">
          <img 
            src="https://avatars2.githubusercontent.com/u/59977017?s=460&u=d325a44ecbbf380da68ea0f200fcea7e5b9be0ab&v=4" 
            alt="Diogo Sena"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="">
          <img 
            src="https://avatars2.githubusercontent.com/u/59977017?s=460&u=d325a44ecbbf380da68ea0f200fcea7e5b9be0ab&v=4" 
            alt="Diogo Sena"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
