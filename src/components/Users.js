import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true
      // moreState: 'test',
      // nested: {},
      // data: [],
    }; //state is ALWAYS an obj in class based components
  }

  //error boundaries
  componentDidUpdate() {
    // try {
    //   someCodeWhichMighFail()
    // } catch (err) {
    //   //handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error('No users provided!')
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    }); //react merges this new state with the new setstate
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

// };

export default Users;
