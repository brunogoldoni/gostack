import React from 'react';

import { FiUser, FiMail, FiLock, FiArrowDownLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="BoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="forgot">
          <FiArrowDownLeft />
          Votlar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
