/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(restTime){
  if (restTime === 0){
    return 'Lasagna is done.';
  } else if (restTime > 0){
    return 'Not done, please wait.';
  } else if (restTime === undefined){
    return 'You forgot to set the timer.';
  }
}


export function preparationTime(coucheTab, prepTimeMoy){
  return coucheTab.length * (prepTimeMoy ?? 2);
}

export function quantities(coucheTab){
  let compteur = 0, noodles = 50, sauce = 0.2, totalNoodles = 0, totalSauce = 0;

  for (let noodles in coucheTab){
    if ( coucheTab[noodles] === 'noodles'){
      compteur++; 
    }
  }
  totalNoodles += compteur * noodles;

  compteur = 0;
  for (let sauce in coucheTab){
    if ( coucheTab[sauce] === 'sauce'){
      compteur++;
    }
  }
  totalSauce += compteur * sauce;

  return { 'noodles': totalNoodles, 'sauce': totalSauce};
}

export function addSecretIngredient(friendsList, myList){
  let secretIngredient = friendsList.slice(-1);
  myList.push(secretIngredient[0]);
}

export function scaleRecipe(recipe, portion){
  let result={};
  for (let key in recipe){
    result[key] = recipe[key] * portion/2;
  }
  return result;
}