const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInput = document.querySelector("input"),
options = wrapper.querySelector(".options-list"),
valueField = document.querySelector(".value"),
valueInput = document.querySelector(".value-text"),
optionsList = document.getElementById("options-list"),
valueChanger = document.querySelector(".change-input"),
saveBtn = document.querySelector(".save-btn");


selectBtn.addEventListener("click", () => {
 wrapper.classList.toggle("active");
});

function generateData(n)
{
    let options = [];
    for (let i =0; i < n; i++)
    {
        let option = { 
            name: `name_${i}`,
            value: `value_${i}`
        };
        options.push(option);
    }
    return options;
}

optionsData = generateData(20);

function addOption() {
    optionsData.forEach (item => {
        let li = `<li onclick="updateName(this)">${item.name}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addOption();

function updateName(selectedLi) {
    searchInput.value ="";
    addOption(selectedLi.innerText);
    wrapper.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    valueField.classList.add('active');

    let selectedValue = optionsData.find(element => element.name === selectedLi.innerText).value;
    valueInput.innerText = selectedValue;
}

searchInput.addEventListener("keyup", () => {
 let names = [];
 let searchValue = searchInput.value.toLowerCase();
 names = optionsData.filter(data => {
    return data.name.toLowerCase().includes(searchValue);
 }).map(data => `<li onclick="updateName(this)">${data.name}</li>`).join("");
 options.innerHTML = names ? names : `<p>Sorry, no results:(</p>`;
});




optionsList.onchange = function() {
    let selectedName = optionsList.value;
    let selectedValue = optionsData.find(element => element.name === selectedName).value;
};

/*
мои изменения
saveBtn.addEventListener("click", () => {
    
    let newText = valueChanger.value; 
    valueInput.innerText = newText;
    valueChanger.value = "";
    
    optionsData.map(element => { 
        if  (element.name === selectBtn.innerText ) {
            element.value = newText;
        }
    });
    });
    */