const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText
        console.log(name, price, category);

        const selected = document.getElementById('selected-players-container');
        const div = document.createElement('div');
        const pName = document.createElement('p');
        const pPrice = document.createElement('p');
        const pCategory = document.createElement('p');

        div.classList.add('selected-players');

        pName.innerText = name;
        pPrice.innerText = price;
        pCategory.innerText = category;

        div.appendChild(pName);
        div.appendChild(pPrice);
        div.appendChild(pCategory);

        

        selected.appendChild(div);

        updatedTotalCost(price);
    })
    
}

function converter(id) {
    const elementText = document.getElementById(id).innerText;
    const elementNum = parseInt(elementText);

    return elementNum;
}

function updatedTotalCost(price) {
    const totalCost = converter('total-cost');
    const selectedCost = parseInt(price);

    const updatedTotalCost = totalCost + selectedCost;
    document.getElementById('total-cost').innerText = updatedTotalCost
}

