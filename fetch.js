const charactersList = document.getElementById('provinsi');
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const res = await fetch('slb.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>nama lembaga: ${character.lembaga}</h2>
                <p>alamat: ${character.alamat}</p>
                <p>kota: ${character.kota}</p>
                <p>provinsi: ${character.provinsi}</p>
                <p>kode pos: ${character.postcode}</p>
                <p>telepon: ${character.telepon}</p>
                <p>email: ${character.email}</p>
                <p>website: ${character.website}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
