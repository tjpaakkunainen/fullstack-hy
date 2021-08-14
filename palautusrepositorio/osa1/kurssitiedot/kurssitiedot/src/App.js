import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
        </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
         {props.a}
      </p>
      <p>
        {props.b}
      </p>
      <p>
        {props.c}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content a={part1 + ' ' + exercises1} b={part2 + ' ' + exercises2} c={part3 + ' ' + exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;
