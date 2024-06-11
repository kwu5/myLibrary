const mylibrary = [];

function Book (title, author, year, read){
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
    this.info = function(){
        const readstatus = this.read?'read':'not read yet'
        return `${this.title} by ${this.author}, ${this.year} year, ${readstatus}`;
    }
}


function addBookToLibrary(){
    const title = prompt('Enter a title of the book');
    const author = prompt('Enter the author of the book');
    const year = prompt('Enter the year of the book');
    const read_input = prompt('Have you read this book? If so, enter \'YES\'');
    const read = read_input==='YES'? true: false; 
    const book = new Book(title, author, year, read);
    mylibrary.push(book);
    addBookToTable(book);
}

const container = document.querySelector("#container");
let btn = document.createElement("button");
btn.textContent = "Add book";
btn.addEventListener("click", ()=> addBookToLibrary());
container.appendChild(btn);


const tbl = document.querySelector("table");
const tblBody = document.createElement("tbody");
tbl.appendChild(tblBody);

const addBookToTable = (book)=>{
    
    const row = document.createElement("tr");
    for(let j=0;j<4;j++){
        const cell = document.createElement("td");
            
        switch(j){
            case 0:
                cell.textContent = book.title;
                break;
            case 1:
                cell.textContent = book.author;
                break;
            case 2:
                cell.textContent = book.year;
                break;
            case 3:
                cell.textContent = book.read? 'READ': 'NOT READ';
                break;
            default:
                console.error("It is asked to do wrong things");    
            }
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
}



