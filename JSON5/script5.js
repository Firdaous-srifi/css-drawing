fetch('data5.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const allmovies= []
    const table = document.getElementById('movieTable')
    Object.keys(data.movies).forEach(e => {
        const genre = data.movies[e]
        genre.forEach(element => {
            allmovies.push({e,...element})
            const tr = document.createElement('tr')
            tr.innerHTML=`
            <td>${e}</td>
            <td>${element.title}</td>
            <td>${element.director}</td>
            <td>${element.year}</td>
            <td>${element.rating}</td>
            `
            table.appendChild(tr)
        });
    });
    const btn = document.getElementById('filterRating')
    btn.addEventListener('click',()=>{
        table.innerHTML=''
        const note = document.getElementById('minRating').value
        Object.keys(data.movies).forEach(e => {
            const genre = data.movies[e]
            genre.forEach(element => {
                if(element.rating>=parseInt(note)){
                const tr = document.createElement('tr')
                tr.innerHTML=`
                <td>${e}</td>
                <td>${element.title}</td>
                <td>${element.director}</td>
                <td>${element.year}</td>
                <td>${element.rating}</td>
                `
                table.appendChild(tr)
                }
            });
            })
        });
        const select = document.getElementById('sortYear')
        select.addEventListener('change',()=>{
            const value = select.value
                if(value==="asc"){
                    allmovies.sort((a,b) => a.year-b.year)
                }else{
                    allmovies.sort((a,b) => b.year-a.year)
                }
            table.innerHTML=''
            allmovies.forEach(element => {
                const tr = document.createElement('tr')
                tr.innerHTML=`
                <td>${element.e}</td>
                <td>${element.title}</td>
                <td>${element.director}</td>
                <td>${element.year}</td>
                <td>${element.rating}</td>
                `
                table.appendChild(tr)
            });
        })

    }) 