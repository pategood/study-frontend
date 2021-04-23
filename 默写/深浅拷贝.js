function shallow(object){
  if(!object||typeof object !== 'object') return;
  let newObject =Array.isArray(object) ? [] :{};
  for(let key in object){
    if(object.hasOwnProperty(key) ){
      newObject[key]=object[key]
    }
  }
  return newObject;
}

function deepCopy(object) {
  if(!object||typeof object !=='object') return object;
  let newObject =object.hasOwnProperty(object) ?[]:{};
  for(let key in object){
    newObject[key]=object[key]
  }
  return newObject;
}