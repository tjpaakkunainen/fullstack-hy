import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
        </h1>
    </div>
  )
}

const Content = (props) => {
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
        Number of exercises: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content a={course.parts[0].name + ' ' + course.parts[0].exercises} b={course.parts[1].name  + ' ' + course.parts[1].exercises} c={course.parts[2].name  + ' ' + course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App;

/* import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
        </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <h3>
         {props.part}: {props.exers}
      </h3>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <Part part={props.part1} exers={props.exercises1}/>
    <Part part={props.part2} exers={props.exercises2}/>
    <Part part={props.part3} exers={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App;



/* import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
        </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <h3>
         {props.part}: {props.exers}
      </h3>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <Part part={props.part1} exers={props.exercises1}/>
    <Part part={props.part2} exers={props.exercises2}/>
    <Part part={props.part3} exers={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises: {props.total}
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
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;
*/

/* 

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

export default App; */