fetch('data2.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const table = document.getElementById('employeeTable')
    Object.keys(data.employees).forEach(element => {
        const departement = data.employees[element]
        staff = departement.staff
        staff.forEach(stf => {
            const tr =document.createElement('tr')
            tr.innerHTML=`<td> ${stf.id}</td>
            <td> ${stf.name}</td>
            <td> ${stf.role}</td>
            <td> ${stf.age}</td>
            <td> ${departement.name}</td>
            `
            table.appendChild(tr)
            
        });
    });
    const btn = document.getElementById('Marketing')
    btn.addEventListener('click',()=>{
        Object.keys(data.employees).forEach(element => {
            table.innerHTML=''
            const departement = data.employees[element]
            staff = departement.staff
            if(departement.name==='Marketing'){
            staff.forEach(stf => {
                const tr =document.createElement('tr')
                tr.innerHTML=`<td> ${stf.id}</td>
                <td> ${stf.name}</td>
                <td> ${stf.role}</td>
                <td> ${stf.age}</td>
                <td> ${departement.name}</td>
                `
                table.appendChild(tr)
                
            });}
        });
    })
})
