import Profile from './Profile/Profile.jsx';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import statData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionData from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Statistics title="Upload stats" stats={statData} />

      <Statistics stats={statData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionData} />
    </Container>
  );
};
