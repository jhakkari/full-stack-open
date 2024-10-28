const SubHeader = ({ name }) => {
    return <h2>{name}</h2>
}
  
const Total = ({ parts }) => {
    const exerciseAmout = parts.reduce(function(sum, part) {
        return sum + part.exercises
    },0)
    return (
      <div>
        <strong>
          Total of {exerciseAmout} exercises
        </strong>
      </div>
    )
}
  
const Part = ({ name, exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
}
  
const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </div>
    )
}
  
const Course = ({ course }) => {
    return (
      <div>
        <SubHeader name={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
    )
}

export default Course