let lietotajaDarbi = [];

window.addEventListener('load', () =>{
    lietotajaDarbi = JSON.parse(localStorage.getItem("Darbi")|| "[]");
    console.log(lietotajaDarbi);
    paradi();
})

document.getElementById('pievienotDarbu').addEventListener('click', () =>{
 
    let lietinas = {kasJadara: kasJadara.value, kadJaizdara: kadJaizdara.value};

    kasJadara.value = "";
    kadJaizdara.value = "";

    lietotajaDarbi.push(lietinas);

    paradi();
})

//<li><h3>Kad jāizdara: ${lietotajaDarbi[x].kadJaizdara}</h3></li>
function paradi(){
    let visiDarbi = document.getElementById('saraksts');
    visiDarbi.innerHTML = "";

    for(let x=0; x < lietotajaDarbi.length; ++x){
        let darbins = `
            <div class="Darbi">
                <h3>Darbs: ${lietotajaDarbi[x].kasJadara} 
                // Kad jāizdara: ${lietotajaDarbi[x].kadJaizdara}</h3>
            </div>`;
            
        visiDarbi.innerHTML += darbins;
    }

    localStorage.setItem("Darbi", JSON.stringify(lietotajaDarbi))
}