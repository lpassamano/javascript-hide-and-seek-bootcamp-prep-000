function getFirstSelector(selector){
  //accepts selector and returns the first element it matches
  return document.querySelector(selector)
}

function nestedTarget(){
  //pulls .target out of #nested
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  //increases ranks in all of the .ranked-list by n
  var rankedListItems = document.querySelectorAll('ul.ranked-list')
  for(let i = 0; i < rankedListItems.length; i++){
    var item = rankedListItems[i].innerHTML
    item = parseInt(item)
    rankedListItems[i].innerHTML = (item + n).toString
  }
}

function deepestChild(){
  //pulls out most deeply nested child from div#grand-node
  var currentElement = document.querySelector('div#grand-node')
  var nextElement = currentElement.children[0]
  while (nextElement){
    currentElement = nextElement
    nextElement = currentElement.children[0]
  }
  return currentElement
  
  //solution without looping over elements
  //var children = document.querySelectorAll('div#grand-node')
  //var index = children.length - 1
  //return children[index]
}
