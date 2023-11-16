const dateInput = document.getElementById('date');
const currentDate = new Date();
dateInput.valueAsDate = currentDate;



let form = document.getElementById('sheet')
form.addEventListener('submit', async(e) => {
    try {
        e.preventDefault()
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form)})
        const result = await res.json();
        await getapi(api_url);
    } catch (error) {
        console.error('Error!', error.message)
    }
})
const api_url = 
      "https://sheetdb.io/api/v1/a9e0043cw1157";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    let data = await response.json();
    // data.reverse();
    console.log(data);
    show(data.reverse());
}
// Calling that async function
getapi(api_url);

function show(data) {
    let tab = 
        `<tr>
          <th>Date</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
          <th>Dinner(Non-Veg)</th>
         </tr>`;
   
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.Date} </td>
    <td>${r.Breakfast}</td>
    <td>${r.Lunch}</td> 
    <td>${r.Dinner}</td>
    <td>${r['Dinner(Non-Veg)']}</td>           
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
}
