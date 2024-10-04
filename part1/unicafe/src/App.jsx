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
  const count = good + neutral + bad
  const positives = good / count * 100
  if (count > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='all' value={count} />
          <StatisticLine text='average' value={(good * 1 + bad * -1) / count} />
          <StatisticLine text='positive' value={positives.toString() + '%'} />
        </tbody>
      </table>
    )
  }
  return (
    <div>
      No feedback given
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
      
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
