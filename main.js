
/* var items = document.getElementsByClassName("collection-item");
for(var index=0; index < items.length; index++){
    items[index].style.backgroundColor = "green";
}
index[0].firstChild.textContent = "bootas";
console.log(items);

items[2].style.backgroundColor = "green"; */

/* var items = document.getElementsByTagName("li");


lis = Array.from(lis);
console.log(lis); */

// 1. Insert a image in your HTML let's say img1
// 2. using JS change the src attribute of img element to say img2
// 3. refactor it to change the image on click of a button
// 

button1 = document.getElementById("butt").addEventListener("click", insertRow)
function insertRow() {
    var table = document.getElementById("sampletable");
    var createRow = table.insertRow(-1);
    createRow.insertCell(0).innerHTML = "New Cell 1";
    createRow.insertCell(1).innerHTML = "New Cell 2";
    createRow.insertCell(2).innerHTML = "New Cell 3";
    createRow.insertCell(3).innerHTML = "New Cell 4";
}


