let count = 0;


const increase = document.querySelector("#increment");
const ValueUpdate = document.querySelector("#Count");

const decrease = document.querySelector("#decrement");

const Reset = document.querySelector("#reset");

let Input = document.querySelector("#input");

let Numberform = document.querySelector("#numberform");

let modebtn = document.querySelector("#daymode");

let body = document.querySelector("body");

const nightmode = document.querySelector(".nightmode");

const mainContainer = document.querySelector(".main-container");

let currMode = "light";

modebtn.addEventListener("click" , () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        document.querySelector("body").style.border = "2px solid white";
        modebtn.innerText = "🌞";
        mainContainer.style.backgroundColor = "#1B1F3B";
        modebtn.style.backgroundColor = "#1B1F3B";
        ValueUpdate.style.color = "green";
        button.style.backgroundColor = "red";
        
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        document.querySelector("body").style.border = "2px solid black";
        modebtn.innerText = "🌜"
        mainContainer.style.backgroundColor = "#f9f9ed";
        modebtn.style.backgroundColor = "#f9f9ed";
        ValueUpdate.style="green";

        

    }
})


const Increment = () => {
    count++
    ValueUpdate.innerText = count;
    
}
increase.addEventListener("click", Increment);


const Decrement = () => {
    if(count > 0){
        count--;
    }else {
        count = 0;
    }

    ValueUpdate.innerText = count;
    ValueUpdate.style.color= "red";
    
}

decrease.addEventListener("click", Decrement);


const reset = () => {
    count = '0';
    ValueUpdate.innerText = count;
    count = '';
}
Reset.addEventListener("click", reset)


const input = (event) => {
    event.preventDefault();
    
    // Get the input value and convert it to a number
    const numberValue = parseFloat(Input.value);
    
    // Check if the input value is a valid number
    if (isNaN(numberValue) || numberValue <= 0) {
        alert("Nijere Seyana Vaba bondo koira Boro sonkha den.");
    } else {
        // Update the count and display the new value
        count = numberValue;
        ValueUpdate.innerText = count;
        
        // Clear the input field after submission
        Input.value = '';
    }
};
Numberform.addEventListener("submit", input);

