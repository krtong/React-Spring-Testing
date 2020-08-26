import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import rouletteWheel from '../../img/roul.svg'
const Background = (props) => {
  // const wheelClass = {height: '50%', width: '50%'};
  const [isToggled, setToggle] = useState(false)
  const [spring, setSpring] = useState(false)
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  //style to apply
  const fade = useSpring({
    config: { mass: 3, tension: 30, friction: 40, clamp: false },
    transform: spring ? `rotate(${second}deg)` : `rotate(${first}deg)`
  })

  const randomspin = () => {
    const number = () => Math.random() * (900 - 360) + 360
    let newNumber = number();
    let secondNewNumber = number()
    console.log('number', newNumber)

    setSecond(newNumber)

// ? newnumber : 0

    setFirst(secondNewNumber)

    // it goes from 0 to new number
    //and it sets spring to true
    setSpring(!spring)

    console.log('spring', spring)

    console.log('first', first)
    console.log('second', second)

    // return Math.random() * (900 - 360) + 360;
  }

  return (
    <div>
      <h2>roulette</h2>
      <h1>|</h1>
      <animated.div style={fade}>
        <img width="33%" src={rouletteWheel} alt="Logo" />
      </animated.div>
      <button onClick={() => randomspin()}>spin wheel</button>
    </div>
  )
}

export default Background
