import { Component } from 'react';
import Section from './Section';
import Options from './Options';
import Statistics from './Statistics';
import Notification from './Notification';
import styles from './App.module.scss';



export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = value => () => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };



  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
    const options = Object.keys(this.state);

    return (
      <div className={styles.container}>
        <Section title={'Please leave feedback'}>
          <Options
            options={options}
            onLeaveFeedback={this.increment}
          ></Options>
        </Section>

        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}
