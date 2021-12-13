import './App.css';

import Statistics from './components/statistics/Statistics';
import statisticData from './components/statistics/statisticData.json';

import FriendList from './components/friendsList/FriendsList';
import friendsData from './components/friendsList/friendsData.json';

import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList props={friendsData} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
