import React from 'react';
import ReactDOM from 'react-dom';

function timeBasedGreetings() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }
  return timeOfDay
}

function InlineStylesWithStyleProperty() {
  const greetings = timeBasedGreetings();
  return (
    <h1> Good {greetings}!</h1>
  )
}

export default InlineStylesWithStyleProperty;
