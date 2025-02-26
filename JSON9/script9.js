fetch('data9.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const table = document.getElementById('reservationList')
    const allreservations = []
    data.hotel.reservations.forEach(reserve => {
        reserve.rooms.forEach(roomres => {
            allreservations.push({...reserve,...roomres})
            const typeroom = data.hotel.rooms.find(r=> r.id===roomres.roomId)
            const tr = document.createElement('tr')
            tr.innerHTML=`
            <td>${reserve.reservationId}</td>
            <td>${reserve.customer}</td>
            <td>${reserve.checkIn}</td>
            <td>${reserve.checkOut}</td>
            <td>${reserve.totalAmount}</td>
            <td>${reserve.status}</td>
            <td>${typeroom? `${typeroom.type} (${roomres.nights} nights)`:'note found'}</td>
            `
            table.appendChild(tr)
        });
    });

    const stat = document.getElementById('statusFilter')
    const datS = document.getElementById('dateFilterStart');
    const datE = document.getElementById('dateFilterEnd');
    const sort = document.getElementById('sortFilter');
    const btn = document.getElementById('applyFilters');
    btn.addEventListener('click',()=>{
        table.innerHTML=''
        const statut = stat.value 
        const dateStart = datS.value 
        const dateEnd = datE.value 
        const ordre = sort.value

        let filtre = allreservations.filter(e=> (statut=== e.status || statut=== '') && (dateStart===e.checkIn || dateStart==="") && (dateEnd===e.checkOut || dateEnd===''))
        if(ordre==="date"){
            filtre= filtre.sort((a,b)=> new Date(a.checkIn)- new Date(b.checkIn))
        }else{
            filtre= filtre.sort((a,b)=> a.totalAmount - b.totalAmount)
        }
        
        filtre.forEach(reserve => {
            const typeroom = data.hotel.rooms.find(r=> r.id===reserve.roomId)
            const tr = document.createElement('tr')
            tr.innerHTML=`
            <td>${reserve.reservationId}</td>
            <td>${reserve.customer}</td>
            <td>${reserve.checkIn}</td>
            <td>${reserve.checkOut}</td>
            <td>${reserve.totalAmount}</td>
            <td>${reserve.status}</td>
            <td>${typeroom? `${typeroom.type} (${reserve.nights} nights)`:'note found'}</td>
            `
            table.appendChild(tr)
        });

    })
})