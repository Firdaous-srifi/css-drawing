fetch('data7.json')
.then((reponse)=>reponse.json())
.then((data)=>{
    const matieres = document.getElementById('subjectFilter')
    const affiche = document.getElementById('courseList')
    const allstudents = []
    data.university.courses.forEach(e => {
        const option = document.createElement('option')
        option.value=e.subject
        option.textContent=e.subject
        matieres.appendChild(option)

        e.students.forEach(element => {
            allstudents.push({...e,...element})
            const tr =document.createElement('tr')
            tr.innerHTML=`
            <td>${e.courseName}</td>
            <td>${e.professor}</td>
            <td>${e.subject}</td>
            <td> name :${element.name} ,son grade :${element.grade}</td>
            `
            affiche.appendChild(tr)
        });
    });
    const select = document.getElementById('subjectFilter')
    const grades = document.getElementById('gradeFilter')
    const btn = document.getElementById('applyFilters')
    btn.addEventListener('click',()=>{
        const subjects = select.value
        const grade = grades.value
        affiche.innerHTML=''
        allstudents.forEach((e) => {
            if((subjects===e.subject || subjects==='') && parseFloat(grade)<=parseFloat(e.grade) ){
                const tr =document.createElement('tr')
                tr.innerHTML=`
                <td>${e.courseName}</td>
                <td>${e.professor}</td>
                <td>${e.subject}</td>
                <td> name :${e.name} ,son grade :${e.grade}</td>
                `
                affiche.appendChild(tr)
            }
        });
    })
})