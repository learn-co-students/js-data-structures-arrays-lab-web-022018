// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}


function destructivelyRemoveLastDriver(name){
  drivers.pop()
}


function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  newdrivers = drivers.slice(0)
  newdrivers.push(name)
  return newdrivers
}

function prependDriver(name){
  newdrivers = drivers.slice(0)
  newdrivers.unshift(name)
  return newdrivers
}

function removeLastDriver(){
  newdrivers = drivers.slice(0)
  newdrivers.pop()
  return newdrivers
}

function removeFirstDriver(){
  newdrivers = drivers.slice(0)
  newdrivers.shift()
  return newdrivers
}