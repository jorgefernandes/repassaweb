import withUserData from '../HOC/withUserData';
import UserGreeting from '../Components/UserGreeting';

const UserGreetingContainer = withUserData(UserGreeting);


export default UserGreetingContainer