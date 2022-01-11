function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
      const hq = 42;

          if (pickupLocation > 42) {
            return pickupLocation - hq;

              } else {
                  return hq - pickupLocation
      }
  }

  function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
      const hq = 42

          if (pickupLocation > 42) {
            return  (pickupLocation - hq) * 264;

            } else {
                return (hq - pickupLocation) * 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    }
  }

  function distanceTravelledInFeet(start, destination) {
          return Math.abs(start - destination) * 264
  }

  function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination)
    const price = 0.02

    const [freeStuff, notFlat, flat] = [
        totalFeet <= 400, 
        totalFeet > 400 && totalFeet <= 2000, 
        totalFeet > 2000 && totalFeet < 2500
    ]
   

    if (freeStuff) {
        return 0
    } else if (notFlat) {
        return (totalFeet - 400) * price
    } else if (flat) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}