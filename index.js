// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(name) {
  // let newArray = [...drivers, name]
  // return newArray
  return [...drivers, name]
}

function prependDriver(name) {
  // let newArray = [name, ...drivers]
  // return newArray
  return [name, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, -1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
