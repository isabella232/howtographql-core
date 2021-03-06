import React from 'react';
import { Text, Image, Flex } from '../shared/base';
import { Link } from 'gatsby';
import { GithubButton } from '../shared/buttons';
import { loginUser } from '../../utils/auth';
import WithCurrentUser from '../../utils/auth/WithCurrentUser';
import { CenteredLoader } from '../shared/Loader';

const Account = () => {
  return (
    <WithCurrentUser>
      {({ user, loading }) => {
        if (loading) {
          return <CenteredLoader />;
        }
        if (user) {
          return <Profile user={user} />;
        }
        return <GithubButton onClick={() => loginUser()}>Sign up</GithubButton>;
      }}
    </WithCurrentUser>
  );
};

interface ProfileProps {
  user: User;
}

type User = {
  id: string;
  avatarUrl: string;
  name: string;
  githubHandle: string;
};

const Profile: React.FunctionComponent<ProfileProps> = ({ user }) => {
  return (
    <Link to="/profile">
      <Flex alignItems="center" justifyContent="center">
        <Image
          width={[0.5, 0.3, 0.12]}
          src={user.avatarUrl}
          borderRadius={100}
        />
        <Text m={1}> {user.name} </Text>
      </Flex>
    </Link>
  );
};

export default Account;
