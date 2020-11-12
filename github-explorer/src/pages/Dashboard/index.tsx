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
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/51120700?s=400&u=8a94f2305aaab882f3b9c4a2e1d2fa65fb45ed77&v=4"
            alt="Bruno Goldoni"
          />
          <div>
            <strong>brunogoldoni/gostack</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/51120700?s=400&u=8a94f2305aaab882f3b9c4a2e1d2fa65fb45ed77&v=4"
            alt="Bruno Goldoni"
          />
          <div>
            <strong>brunogoldoni/gostack</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/51120700?s=400&u=8a94f2305aaab882f3b9c4a2e1d2fa65fb45ed77&v=4"
            alt="Bruno Goldoni"
          />
          <div>
            <strong>brunogoldoni/gostack</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
