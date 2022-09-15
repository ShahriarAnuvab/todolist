const todo = document.querySelector("#todo");

const input = document.querySelector("#input");

const button = document.querySelector("#button");

const reset_button = document.getElementById("reset");





function check(){
    const todoeditor_div = document.createElement("div");
    todoeditor_div.classList.add("todoeditor");
    
    const list = document.createElement("li");
    
    const add_input = input.value;
    
    const war = document.createElement("p");
    war.classList.add("war");


    list.innerText = add_input;
    
    const del_btn = document.createElement("button");
    del_btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    del_btn.classList.add('delete');

    const ok_btn = document.createElement("button");
    ok_btn.innerHTML = '<i class="fa-solid fa-check"></i>'
    ok_btn.classList.add("ok");





    
    
    todoeditor_div.appendChild(list);
    todoeditor_div.appendChild(ok_btn);
    todoeditor_div.appendChild(del_btn);
    todoeditor_div.appendChild(war);


    todo.appendChild(todoeditor_div);
   
if (add_input=='') {
    war.innerHTML = 'need some task';
    ok_btn.remove();
    del_btn.remove();
    list.remove();
    button.remove();
    input.value = "";

} 

input.value = "";


}

reset_button.addEventListener('click', check);

button.addEventListener( 'click', check);



// function reset(){
//     // alert("pl");
//     ok_btn.add();
//     del_btn.add();
//     list.add();
//     button.add();
//     input.value = "";


// }

// reset_button.addEventListener('click', reset);





function del_task(event){
    // alert("ok");
    const item = event.target;
    console.log(item);
    if (item.classList[0] == 'delete'){
        const del_item = item.parentElement;
        del_item.remove();
    }

    if(item.classList[0] == "ok"){
        // alert('ok');
        const ok_item = item.parentElement;
        ok_item.classList.toggle('ok_item_ed');

    }



}

todo.addEventListener("click", del_task);


function
