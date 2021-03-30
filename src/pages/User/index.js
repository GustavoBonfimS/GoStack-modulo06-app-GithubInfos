import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';
import api from '../../services/api';

export default function User({ route }) {
  const { user } = route.params;
  const [stars, setStars] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const { data } = await api.get(`/users/${user.login}/starred`);
      setStars(data);
    }
    getUserInfo();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <Stars
        data={stars}
        keyExtractor={start => String(start.id)}
        renderItem={({ item }) => (
          <Starred>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />
    </Container>
  );
}

User.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.oneOfType([PropTypes.object]),
  }).isRequired,
};
