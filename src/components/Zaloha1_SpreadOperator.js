// Spread Operator

// 1. Spojování polí
const studentsGroup = ["David", "Jana", "Martina"]
const allStudents = ["Jirka", "Natálie", ...studentsGroup, "Jan"]
console.log(allStudents) 

// 2. Argumenty funkcí
const numbers = [1, 2, 3]
const multipleNumbers = (a, b, c) => {
  console.log(a * b * c)
}
multipleNumbers(...numbers)

// 3. Kopírování polí
const students1 = ["Jan", "Monika", "Dalibor"]
const students2 = students1
students2.push("David")
console.log(students2)
console.log(students1)

const students3 = ["Jan", "Monika", "Dalibor"]
const students4 = [...students3]
students4.push("Pavel")
console.log(students3)
console.log(students4)

// 4. Další spojování
const names1 = ["David", "Anička"]
const names2 = ["Jana", "Mertin"]
const newArray1 = names1.concat(names2)
console.log(newArray1)

const newArray2 = [...names1, "Tomáš", ...names2]
newArray2.push("Theodor")
console.log(newArray2)

const App = () => {
  return <div>
    <h1>Spead Operator</h1>
  </div>
}

export default App