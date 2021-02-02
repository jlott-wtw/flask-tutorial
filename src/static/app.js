const { useState } = React

const HelloWorld = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Like</button>
      <div>Count: {value}</div>
    </div>
  )
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
