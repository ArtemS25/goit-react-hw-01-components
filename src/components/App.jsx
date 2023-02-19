import { GlobalStyles } from './GlobalStyles';
import { UserCard } from './usercard/UserCard';
import { Statistics } from './statistics/Statistics';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import FriendList from './friends/friendsList';
import User from '../../src/user.json';
import Data from '../../src/data.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <UserCard user={User} />
      <Statistics title="Upload stats" stats={Data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
