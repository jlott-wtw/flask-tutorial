const { useState } = React
import './app.css'

const HelloWorld = () => {
  const [value, setValue] = useState(0)
  console.log('value', value)
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Like</button>
      <div>Count: {value}</div>
    </div>
  )
}

export default HelloWorld
