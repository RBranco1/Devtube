import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const Login = () =>  (

  <Modal trigger={<Button className="logar" >Sign in</Button>}>
    <Modal.Header >Sign in</Modal.Header>
    
      <Modal.Description>

        <p className="nome_login">Nome</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira seu nome" />
        <i aria-hidden="true" class="user icon"></i>
        </div>

        <p className="senha_login">Senha</p>
        <div class="ui icon input">
         <input type="text" placeholder="Senha" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>

        <Button color="teal" fluid className="btn_login" >Fazer Login</Button>

      </Modal.Description>

  </Modal>
)

export default Login;
