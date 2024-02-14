import {storedData, dataCall} from './dataCall.js';

let injectHere = document.getElementById("injectHere");
let idSort = document.getElementById("idSort");
let firstNameSort = document.getElementById("firstNameSort");
let lastNameSort = document.getElementById("lastNameSort");
let emailSort = document.getElementById("emailSort");
let ageSort = document.getElementById("ageSort");
let heightSort = document.getElementById("heightSort");
let oneBtn = document.getElementById("oneBtn");
let twoBtn = document.getElementById("twoBtn");
let threeBtn = document.getElementById("threeBtn");
let fourBtn = document.getElementById("fourBtn");
let fiveBtn = document.getElementById("fiveBtn");
let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");
let pageNumber = document.getElementById("pageNumber");

let start = 0;
let end = 100;
let pageCount = 100;
let count = 1;

dataCall();

oneBtn.addEventListener('click', async () => {
    start = 0;
    end = 10;
    pageCount = 10;
    creatingElements(start, end);
    count = 1;
    pageNumber.textContent = `Page: ${count}`;
});

twoBtn.addEventListener('click', async () => {
    start = 0;
    end = 20;
    pageCount = 20;
    creatingElements(start, end);
    count = 1;
    pageNumber.textContent = `Page: ${count}`;
});

threeBtn.addEventListener('click', async () => {
    start = 0;
    end = 30;
    pageCount = 30;
    creatingElements(start, end);
    count = 1;
    pageNumber.textContent = `Page: ${count}`;
});

fourBtn.addEventListener('click', async () => {
    start = 0;
    end = 40;
    pageCount = 40;
    creatingElements(start, end);
    count = 1;
    pageNumber.textContent = `Page: ${count}`;
});

fiveBtn.addEventListener('click', async () => {
    start = 0;
    end = 50;
    pageCount = 50;
    creatingElements(start, end);
    count = 1;
    pageNumber.textContent = `Page: ${count}`;
});

previousBtn.addEventListener('click', async () => {
    if(start>0){
        start = start-pageCount;
        end = end-pageCount;
        count--;
        creatingElements(start, end);
    }
});

nextBtn.addEventListener('click', async () => {
    let max = Math.ceil(100/pageCount);
    if(count < max){
        count++;
        start = start+pageCount;
        end = end+pageCount;
        creatingElements(start, end);
    }
    
});

idSort.addEventListener('click', async () => {

    storedData.sort((a, b) => {
        if(a.Id<b.Id){
            return -1;
        }
        if(a.Id>b.Id){
            return 1;
        }
        return 0;
    } )

    creatingElements(start, end);
});

firstNameSort.addEventListener('click', async() => {

    storedData.sort((a, b) => {
        if(a.FirstName<b.FirstName){
            return -1;
        }
        if(a.FirstName>b.FirstName){
            return 1;
        }
        return 0;
    } )

    creatingElements(start, end);
});

lastNameSort.addEventListener('click', async() => {
    
    storedData.sort((a, b) => {
        if(a.LastName<b.LastName){
            return -1;
        }
        if(a.LastName>b.LastName){
            return 1;
        }
        return 0;
    } )

    creatingElements(start, end);

});

emailSort.addEventListener('click', async() => {
    
    storedData.sort((a, b) => {
        if(a.Email<b.Email){
            return -1;
        }
        if(a.Email>b.Email){
            return 1;
        }
        return 0;
    } )

    creatingElements(start, end);
});

ageSort.addEventListener('click', async() => {
    
    storedData.sort((a, b) => {
        if(a.Age<b.Age){
            return -1;
        }
        if(a.Age>b.Age){
            return 1;
        }
        return 0;
    } )

    creatingElements(start, end);
});

heightSort.addEventListener('click', async() => {
    
    storedData.sort((a, b) => {
        if(a.Height<b.Height){
            return -1;
        }
        if(a.Height>b.Height){
            return 1;
        }
        return 0;
    } )

    creatingElements(start, end);
});

const creatingElements = async(start, end) => {

    pageNumber.textContent = `Page: ${count}`;
    injectHere.textContent = "";

    storedData.slice(start, end).map(elements => {

        let firstDiv = document.createElement('div');
        firstDiv.className = "col-1";
        firstDiv.textContent = elements.Id;
        let secondDiv = document.createElement('div');
        secondDiv.className = "col-2";
        secondDiv.textContent = elements.FirstName;
        let thirdDiv = document.createElement('div');
        thirdDiv.className = "col-2";
        thirdDiv.textContent = elements.LastName;
        let fourthDiv = document.createElement('div');
        fourthDiv.className = "col";
        fourthDiv.textContent = elements.Email;
        let fifthDiv = document.createElement('div');
        fifthDiv.className = "col-1";
        fifthDiv.textContent = elements.Age;
        let sixthDiv = document.createElement('div');
        sixthDiv.className = "col-2";
        sixthDiv.textContent = elements.Height;
    
        let outerDiv = document.createElement('div');
        outerDiv.className = "row mx-3 mb-2";
    
        outerDiv.appendChild(firstDiv);
        outerDiv.appendChild(secondDiv);
        outerDiv.appendChild(thirdDiv);
        outerDiv.appendChild(fourthDiv);
        outerDiv.appendChild(fifthDiv);
        outerDiv.appendChild(sixthDiv);
    
        injectHere.appendChild(outerDiv);

    });
}

const onLoad = async () => {

    let newData = await dataCall();

    newData.map(elements => {

        let firstDiv = document.createElement('div');
        firstDiv.className = "col-1";
        firstDiv.textContent = elements.Id;
        let secondDiv = document.createElement('div');
        secondDiv.className = "col-2";
        secondDiv.textContent = elements.FirstName;
        let thirdDiv = document.createElement('div');
        thirdDiv.className = "col-2";
        thirdDiv.textContent = elements.LastName;
        let fourthDiv = document.createElement('div');
        fourthDiv.className = "col";
        fourthDiv.textContent = elements.Email;
        let fifthDiv = document.createElement('div');
        fifthDiv.className = "col-1";
        fifthDiv.textContent = elements.Age;
        let sixthDiv = document.createElement('div');
        sixthDiv.className = "col-2";
        sixthDiv.textContent = elements.Height;
    
        let outerDiv = document.createElement('div');
        outerDiv.className = "row mx-3 mb-2";
    
        outerDiv.appendChild(firstDiv);
        outerDiv.appendChild(secondDiv);
        outerDiv.appendChild(thirdDiv);
        outerDiv.appendChild(fourthDiv);
        outerDiv.appendChild(fifthDiv);
        outerDiv.appendChild(sixthDiv);
    
        injectHere.appendChild(outerDiv);

    });
}

onLoad();