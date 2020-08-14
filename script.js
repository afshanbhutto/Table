function printTable(){
    const number = document.querySelector('input').value;
    for(let i=1; i<=10 ; i++){
        let print = document.querySelector('p span');
        print.innerHTML += (number * i) + "<br/>";
    }
}