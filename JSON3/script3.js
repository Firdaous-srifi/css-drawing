fetch('data3.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const table = document.getElementById('bookTable')
    Object.keys(data.library.books).forEach(element => {
        const type = data.library.books[element]
        Object.keys(type).forEach(elementt => {
            const types = type[elementt]
            types.forEach(tps => {
            const tr = document.createElement('tr')
            tr.innerHTML=`
            <td>${element}</td>
            <td>${elementt}</td>
            <td>${tps.title}</td>
            <td>${tps.author}</td>
            <td>${tps.year}</td>
            `
            table.appendChild(tr)
            });
            
        });
    });
    const btn = document.getElementById('filter')
    btn.addEventListener('click',()=>{
        table.innerHTML=''
        Object.keys(data.library.books).forEach(element => {
            const type = data.library.books[element]
            Object.keys(type).forEach(elementt => {
                const types = type[elementt]
                types.forEach(tps => {
                if (tps.year>=2000) {
                    const tr = document.createElement('tr')
                tr.innerHTML=`
                <td>${element}</td>
                <td>${elementt}</td>
                <td>${tps.title}</td>
                <td>${tps.author}</td>
                <td>${tps.year}</td>
                `
                table.appendChild(tr)
                }
                
                });
                
            });
        });
    })
})