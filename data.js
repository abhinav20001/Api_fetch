

// url of our api 
const url_api =
    "https://jsonplaceholder.typicode.com/users";

// Async function defined 
async function api_get(url) {

    // Storing output
    const output = await fetch(url);

    // Data stored in JSON format 
    var info = await output.json();
    console.log(info);
    if (output) {
        hideloader();
    }
    show(info);
}
// Call to async function 
api_get(url_api);

// Hiding loader function
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Details of Registered Emplyees mentioned 
function show(data) {
    // Table Header
    let tab =
        `<tr style="border-bottom:1pt solid black;"> 
          <th>id</th> 
          <th>Name</th> 
          <th>User_Name</th> 
          <th>email</th> 
          <th>phone</th> 
          <th>website</th> 
         </tr>`;

    // Table Content  

    for (let i of data) {
        tab += `<tr>  
    
    <td>${i.id}</td> 
    <td>${i.name}</td> 
    <td>${i.username}</td>  
    <td>${i.email}</td>           
    <td>${i.phone}</td>           
    <td>${i.website}</td>           
</tr>`;
    }
    // innerHTML set as tab variable
    document.getElementById("employees").innerHTML = tab;
}

function deleteRow() {
    selectElement = document.querySelector('#select1');
    output = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output').textContent = output;
    switch (output) {
        case '1': document.getElementsByTagName("tr")[1].remove();
            break;
        case "2": document.getElementsByTagName("tr")[2].remove();
            break;
        case "3": document.getElementsByTagName("tr")[3].remove();
            break;
        case "4": document.getElementsByTagName("tr")[4].remove();
            break;
        case "5": document.getElementsByTagName("tr")[5].remove();
            break;
        case "6": document.getElementsByTagName("tr")[6].remove();
            break;
        case "7": document.getElementsByTagName("tr")[7].remove();
            break;
        case "8": document.getElementsByTagName("tr")[8].remove();
            break;
        case "9": document.getElementsByTagName("tr")[9].remove();
            break;
        case "10": document.getElementsByTagName("tr")[10].remove();
            break;

    }

}