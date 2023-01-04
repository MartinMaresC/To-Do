//gets data from and lists
const form = document.querySelector('[data-form]');
const lists = document.querySelector('[data-lists]');
const input = document.querySelector('[data-input]');

//empty array
let emptyArray = [];

//Prevents autorefresh
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random() * 1000000; 
    const todo = new Todo(id, input.value);
    console.log(todo);
//store data in new empty array
    emptyArray = [...emptyArray, todo];
    console.log(emptyArray);
// call DOM function
    UI.displayData();
//Call clear input function
    UI.clearInput();
//Remove from the DOM
    UI.removeTodo();
});

//object instance
class Todo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}

//display data in the DOM
class UI{
    static displayData(){
        let displayData = emptyArray.map((item) =>{
            return `
            <div class="todo">
            <p>${item.todo}</p>
            <span class="remove"><img src='/tacho-de-basura.png' alt=""></span>
            </div>
            `
        });
        lists.innerHTML = (displayData).join("");
    }
    static clearInput(){
        input.value = "";
    }
    static removeTodo(){
        lists.addEventListener("click", (e) => {
            if(e.target.classList.contains("remove")){
                console.log("removed");
            }
        })
    }
}
