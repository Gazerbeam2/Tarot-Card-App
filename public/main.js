const update = document.querySelector('#update-button')

update.addEventListener('click', _ =>{

})

function shuffledArray(){
const shuffle = (array) => {
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = array[i];
      array[i] = array[rand];
      array[rand] = oldElement;
    }
    return array;
  } 
}