import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Sign in</Modal.Header>
    
      <Modal.Description>
        <Header>Insira seus dados</Header>
        <p>Nome</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira seu nome" />
        <i aria-hidden="true" class="user icon"></i>
        </div>

        <p>Senha</p>
        <div class="ui icon input">
         <input type="text" placeholder="Senha" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>

        <Button color='teal' fluid >Fazer Login</Button>
      </Modal.Description>

  </Modal>
)

export default ModalModalExample