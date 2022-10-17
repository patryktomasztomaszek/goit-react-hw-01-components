import styles from './App.module.scss';

import Profile from './Profile/Profile';
import user from '..//data/user.json';

import Statistics from './Statistics/Statistics';
import stats from '../data/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import Transactions from './Transactions/Transactions';
import transactions from '../data/transactions.json';

export default function App() {
  const { container } = styles;

  return (
    <main className={container}>
      <Profile userData={user} />
      <Statistics title="Upload Statistics" statsData={stats} />
      <FriendList friendsData={friends} />
      <Transactions transactionsData={transactions} />
    </main>
  );
}
