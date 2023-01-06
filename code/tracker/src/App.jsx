import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [
        // {
        //   name: 'activity1',
        //   days: [
        //     { id: 1, isDone: false },
        //     { id: 2, isDone: false },
        //   ],
        // },
        // {
        //   name: 'activity2',
        //   days: [
        //     { id: 1, isDone: false },
        //     { id: 2, isDone: false },
        //   ],
        // },
      ],
      inputValue: '',
    };
    this.eventId = null;
  }
  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  makeDays = () => {
    let arr = [];
    for (let i = 1; i < 31; i++) {
      arr.push({
        id: i,
        isDone: false,
      });
    }
    return arr;
  };
  handleAddActivity = (e) => {
    e.preventDefault();
    let taskName = this.state.inputValue;
    if (this.state.inputValue) {
      this.setState({
        activities: this.state.activities.concat({
          name: taskName,
          days: this.makeDays(),
        }),
        inputValue: '',
      });
    }
  };
  handleIsDone = (taskIndex, dayIndex) => {
    // console.log(this.state.activities[taskIndex].days[dayIndex]);
    this.setState({
      activities: this.state.activities.map((activity, i) => {
        if (i == taskIndex) {
          activity.days.map((day, z) => {
            if (z == dayIndex) {
              day.isDone = !day.isDone;
              return day;
            }
            return day;
          });
          return activity;
        }
        return activity;
      }),
    });
  };
  handleCloseTask = (i) => {
    this.setState((prevState) => {
      return {
        activities: prevState.activities.filter((elm, z) => z != i),
      };
    });
  };
  handleUpdatedLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.activities));
  };
  componentDidMount() {
    if (localStorage.todos) {
      this.setState({
        activities: JSON.parse(localStorage.todos),
      });
    }
    this.eventId = window.addEventListener(
      'beforeunload',
      this.handleUpdatedLocalStorage
    );
  }
  componentWillUnmount() {
    window.removeEventListener(this.eventId, null);
  }
  render() {
    return (
      <div className="App">
        <Header
          inputValue={this.state.inputValue}
          handleInput={this.handleInput}
          handleAddActivity={this.handleAddActivity}
        />
        <Main
          activities={this.state.activities}
          handleIsDone={this.handleIsDone}
          handleCloseTask={this.handleCloseTask}
        />
      </div>
    );
  }
}
export default App;
