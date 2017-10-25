import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';

const Post = ({ id, imageUrl, userName, likes, onDeleteClicked }) => (
    <Card>
      <Image src={imageUrl} />
      <Card.Content>
        <Card.Header>{userName}</Card.Header>
        <Card.Meta>Likes: {likes}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
          <Button icon onClick={() => onDeleteClicked(id)}>
            <Icon name='delete' />
          </Button>
      </Card.Content>
    </Card>
);

export default Post;
