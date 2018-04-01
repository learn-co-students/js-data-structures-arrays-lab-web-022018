// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
  return drivers
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
  return drivers
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
  return drivers
}

function appendDriver(name){
  const array = [...drivers, name]
  return array
}

function prependDriver(name){
  const array = [name, ...drivers]
  return array
}

function removeLastDriver(){
  const array = drivers.slice(0,-1)
  return array
}

function removeFirstDriver(){
  const array = drivers.slice(1)
  return array
}
