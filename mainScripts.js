let lietotajaDarbi = [];

document.getElementById('pievienotPirkumu').addEventListener('click', () =>{
 
    let lietinas = {kasJadara: kasJadara.value, kadJaizdara: kadJaizdara.value};

    kasJadara.value = "";
    kadJaizdara.value = "";

    lietotajaDarbi.push(lietinas);

    paradi();
})

function paradi(){
    let visiDarbi = document.getElementById('saraksts');
    visiDarbi.innerHTML = "";

    for(let x=0; i < lietotajaDarbi.length; ++x){
        let darbins = `
        <div class="darbs">
            <h3>Virsraksts: ${lietotajaDarbi[x].kasJadara}</h3>
            <h3>Kad jāizdara: ${lietotajaDarbi[x].kadJaizdara}</h3>
        </div>`;
        biblioteka.innerHTML += darbins;
    }
}