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
  var children = document.querySelectorAll('div#grand-node')
  var childrenArray = []
  for(var x = 0; x < children.length; x++){
    childrenArray.push(children[x])
  }
  var index = childrenArray.length - 1
  return children[index]
}