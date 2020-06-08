import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const Cadastro = () =>  (

  <Modal className="cadastro_bloco" trigger={<Button className="cadastrar" >Cadastro</Button>}>
    <Modal.Header  >Cadastro</Modal.Header>
    
      <Modal.Description >

        <p className="nome_cadas">Nome</p>
        <div class="ui icon input ">
         <input type="text" placeholder="Insira seu nome" />
         <i aria-hidden="true" class="user icon"></i>

        </div>
        
        <p className="email_cadas">Email</p>
        <div class="ui icon input">
         <input type="text" placeholder="Email" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>

        <p className="senha_cadas">Senha</p>
        <div class="ui icon input">
         <input type="text" placeholder="Senha" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>

        <Button color='teal' fluid className="btn_cadastro">Cadastrar</Button>

      </Modal.Description>

  </Modal>
)

export default Cadastro;
