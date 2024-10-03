import { useState } from 'react'

const SectionHeader = ({text, purpose}) => {
  if (purpose === 'main'){
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
  return (
    <div>
      <h2>{text}</h2>
    </div>
  )
}

const Button = ({text, eventHandler}) => {
  return (
    <button onClick={eventHandler}>
      {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      Good {good}
      Neutral {neutral}
      Bad {bad}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodReviewClick = () => {
    setGood(good + 1)
  }

  const handleNeutralReviewClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadReviewClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <SectionHeader text='Give feedback about Unicafe!' purpose='main' />
      <Button text='good' eventHandler={handleGoodReviewClick}/>
      <Button text='neutral' eventHandler={handleNeutralReviewClick}/>
      <Button text='bad' eventHandler={handleBadReviewClick}/>
      <SectionHeader text='Statistics' purpose='sub' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
