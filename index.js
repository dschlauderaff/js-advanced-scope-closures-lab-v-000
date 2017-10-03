function produceDrivingRange(range){
  return function(startPoint, endPoint){
    let distance = Math.abs(parseInt(startPoint) - parseInt(endPoint))
    if (range >= distance){
      let variance = range - distance
      return `within range by ${variance}`
    } else {
      let variance = distance - range
      return `${variance} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent){
  return function(fare){
    return fare * tipPercent
  }
}

function createDriver(){
  let driverId = 0
  
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}