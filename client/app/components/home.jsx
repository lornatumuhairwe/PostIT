import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

export const Home = () => (
    <div>
  <Visibility >
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container>
        <Menu inverted pointing secondary size='large'>
          <Menu.Item as='a' active>PostIt</Menu.Item>
          <Menu.Item position='right'>
            <Button as={Link} to='/login' inverted>Log in</Button>
            <Button as={Link} to='/signup' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </Container>

      <Container text>
        <Header
          as='h1'
          content='Your No. 1 Broadcast Message Client'
          inverted
          style={{
 fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'
}}
        />
        <Header
          as='h2'
          content='Type once, send to all.'
          inverted
          style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
        <Button primary size='huge'>
                                Get Started
                                <Icon name='right arrow' />
        </Button>
      </Container>
    </Segment>
  </Visibility>
    </div>
);
