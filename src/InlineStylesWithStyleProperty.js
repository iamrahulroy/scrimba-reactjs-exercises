import React from 'react';
import ReactDOM from 'react-dom';

function timeBasedGreetings(styles) {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = 'morning'
    styles.color = "#3A82BF"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
    styles.color = "#31CC87"
  } else {
    timeOfDay = 'night'
    styles.color = "#B16921"
  }
  return timeOfDay
}

function InlineStylesWithStyleProperty() {
  const styles = {
    fontSize: 30
  }

  const greetings = timeBasedGreetings(styles);
  return (
    <h1 style={styles}> Good {greetings}!</h1>
  )
}

export default InlineStylesWithStyleProperty;
