// Rest Operator

const sum = (...allNumbers) => {
  // console.log(allNumbers) / Vrátí pole
  let result = 0
  for (const oneNumber of allNumbers) {
    result += oneNumber
  }
  return result
}
console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 5, 10))
console.log(sum(1, 2, 10, 10, 10))

const App = () => {
  return <div>
    <h1>Rest Operator</h1>
  </div>
}

export default App