function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

function deepestChild(){
  let query = document.querySelectorAll("#grand-node div")
  return query[query.length - 1]
}

function increaseRankBy(num){
  document.querySelectorAll(".ranked-list li").forEach(function(x){
    x.innerHTML = parseInt(x.innerHTML) + num
  })
}
