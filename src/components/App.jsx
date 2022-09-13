import user from './Prrofile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from "./TransactionHistory/transactions.json";

import { Profile } from './Prrofile/Profile';
import { Statistic } from './Statistics/Statistic';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistic title="Upload stats" items={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </div>
  );
};
