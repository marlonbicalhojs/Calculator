
function clearinput() {
    const screenElement = document.querySelector('input.screen-calculation')
    screenElement.value = "";
}


function insert(num) {
    document.querySelector('input.screen-calculation').value += num
}

function calcular(){
    const result = document.querySelector('input.screen-calculation').value;
    if(result){
        document.querySelector('input.screen-calculation').value = eval(result)
    }
}

function back() {
    const result = document.querySelector('input.screen-calculation').value;
    document.querySelector('input.screen-calculation').value = result.substring(0, result.length -1);
}
