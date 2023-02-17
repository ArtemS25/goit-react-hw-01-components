import { UserCard } from './usercard/UserCard';
import User from '../../src/user.json';

export const App = () => {
  return (
    <div>
      <UserCard user={User} />
    </div>
  );
};
