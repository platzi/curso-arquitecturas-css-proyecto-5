import store from '../store'

import { lowerBand } from '../exercises/lower/bands'
import { lowerBodyweight } from '../exercises/lower/bodyweight'
import { lowerChinup } from '../exercises/lower/chinupbar'
import { lowerDumbbell } from '../exercises/lower/dumbbell'
import { lowerPhysioball } from '../exercises/lower/physioball'
import { lowerTennisball } from '../exercises/lower/tennisball'

import { obliquesBand } from '../exercises/obliques/bands'
import { obliquesBodyweight } from '../exercises/obliques/bodyweight'
import { obliquesChinup } from '../exercises/obliques/chinupbar'
import { obliquesDumbbell } from '../exercises/obliques/dumbbell'
import { obliquesPhysioball } from '../exercises/obliques/physioball'
import { obliquesTennisball } from '../exercises/obliques/tennisball'

import { upperBand } from '../exercises/upper/bands'
import { upperBodyweight } from '../exercises/upper/bodyweight'
import { upperChinup } from '../exercises/upper/chinupbar'
import { upperDumbbell } from '../exercises/upper/dumbbell'
import { upperPhysioball } from '../exercises/upper/physioball'
import { upperTennisball } from '../exercises/upper/tennisball'

export const mixExercises = () => {
  const selectedOptions = [
    { tennisBall: store.getters.isTennisBallSelected },
    { chinupBar: store.getters.isChinupBarSelected },
    { dumbbell: store.getters.isDumbbellSelected },
    { resistanceBand: store.getters.isResistanceBandSelected },
    { physioball: store.getters.isPhysioballSelected },
  ]

  const exercisesTodo = []
  const selectedExercises = () => {
    exercisesTodo.push(lowerBodyweight, upperBodyweight, obliquesBodyweight)
    selectedOptions.forEach(element => {
      console.log(element)
      if (element.tennisBall) {
        exercisesTodo.push(lowerTennisball, upperTennisball, obliquesTennisball)
      }
      if (element.chinupBar) {
        exercisesTodo.push(lowerChinup, upperChinup, obliquesChinup)
      }
      if (element.dumbbell) {
        exercisesTodo.push(lowerDumbbell, upperDumbbell, obliquesDumbbell)
      }
      if (element.resistanceBand) {
        exercisesTodo.push(lowerBand, upperBand, obliquesBand)
      }
      if (element.physioball) {
        exercisesTodo.push(lowerPhysioball, upperPhysioball, obliquesPhysioball)
      }
    });
  }

  const mixExercises = (array, n) => {
    array.sort(() => 0.5 - Math.random());
    const slicedArray = array.slice(0, n);
    return slicedArray;
  }

  if (store.getters.isUpperSelected && store.getters.isLowerSelected && store.getters.isObliquesSelected) {
    selectedExercises()

    const newArray = []
    exercisesTodo.forEach(array => {
      array.forEach(element => {
        newArray.push(element)
      })
    })

    switch (store.getters.level) {
      case 1:
        console.log('all zones level 1')
        console.log(mixExercises(newArray, 1))
        break
      case 2:
        console.log('all zones level 2')
        console.log(mixExercises(newArray, 2))
        break
      case 3:
        console.log('all zones level 3')
        console.log(mixExercises(newArray, 3))
        break
      case 4:
        console.log('all zones level 4')
        console.log(mixExercises(newArray, 4))
        break
    }
  } else if(store.getters.isUpperSelected) {
    selectedExercises()

    const upperArray = []
    exercisesTodo.forEach(element => {
      element.filter(exercise => {
        exercise.title.includes('upper') ? upperArray.push(exercise) : null
      })
    })

    switch (store.getters.level) {
      case 1:
        console.log('upper level 1')
        console.log(mixExercises(upperArray, 1))
        break
      case 2:
        console.log('upper level 2')
        console.log(mixExercises(upperArray, 2))
        break
      case 3:
        console.log('upper level 3')
        console.log(mixExercises(upperArray, 3))
        break
      case 4:
        console.log('upper level 4')
        console.log(mixExercises(upperArray, 4))
        break
    }
  } else if(store.getters.isLowerSelected) {
    selectedExercises()

    const lowerArray = []
    exercisesTodo.forEach(element => {
      element.filter(exercise => {
        exercise.title.includes('lower') ? lowerArray.push(exercise) : null
      })
    })

    switch (store.getters.level) {
      case 1:
        console.log('lower level 1')
        console.log(mixExercises(lowerArray, 1))
        break;
      case 2:
        console.log('lower level 2')
        console.log(mixExercises(lowerArray, 2))
        break;
      case 3:
        console.log('lower level 3')
        console.log(mixExercises(lowerArray, 3))
        break;
      case 4:
        console.log('lower level 4')
        console.log(mixExercises(lowerArray, 4))
        break;
    }
  } else if(store.getters.isObliquesSelected) {
    selectedExercises()

    const obliqueArray = []
    exercisesTodo.forEach(element => {
      element.filter(exercise => {
        exercise.title.includes('oblique') ? obliqueArray.push(exercise) : null
      })
    })

    switch (store.getters.level) {
      case 1:
        console.log('obliques level 1')
        console.log(mixExercises(obliqueArray, 1))
        break;
      case 2:
        console.log('obliques level 2')
        console.log(mixExercises(obliqueArray, 2))
        break;
      case 3:
        console.log('obliques level 3')
        console.log(mixExercises(obliqueArray, 3))
        break;
      case 4:
        console.log('obliques level 4')
        console.log(mixExercises(obliqueArray, 4))
        break;
    }
  }
}