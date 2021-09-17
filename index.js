function getNumbersSquared(numbers) {
    let numbers2 = [...numbers]
  
    let answers = []
  
    for (let i = 0; i < numbers.length; i++) {
      let squaredValue = numbers[i] * numbers2[i]
      answers.push(squaredValue)
    }
    return answers
  }



