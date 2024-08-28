// DATI DI PARTENZA
/* Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg  */


// FASE DI PREPARAZIONE 
// 1. Creo l'array di oggetti con i dati soprastanti. Ogni persona
// costituisce un oggetto dell'array
const team = [
  {
  completeName: 'Wayne Barnett',
  position: 'Founder & CEO',
  photo: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    completeName: 'Angela Caroll',
    position: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg',
  },
  {
  completeName: 'Walter Gordon',
  position: 'Office Manager',
  photo: 'walter-gordon-office-manager.jpg',
  },
  {
    completeName: 'Angela Lopez',
    position: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg',
  },
  {
    completeName: 'Scott Estrada',
    position: 'Developer',
    photo: 'scott-estrada-developer.jpg',
  },
  {
    completeName: 'Barbara Ramos',
    position: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg',
  }
];

// 2. Mostro in console i dati inseriti con la const team
console.log(team);

// 3. Recupero la lista dal DOM
const list = document.getElementById('team-list');

// 4. Recupero il box per le cards
const cardsBox = document.getElementById('cards-box');


// FASE DI ELABORAZIONE
// 2. Creo una struttura per scrivere in console per ogni personalba
// le sue informazioni
let items = '';
let cards= '';
for (let i = 0; i < team.length; i++) {
  teamMember = team[i];
  console.log(
    `Nome completo: ${teamMember.completeName};
    ruolo: ${teamMember.position};
    foto: ${teamMember.photo}.`
  );

  // 2. Raccolgo le informazioni del singolo membro in una variabile con un template literal
  items += `<li>
  Membro: <b>${teamMember.completeName}</b><br>
  ruolo: ${teamMember.position}<br>
  foto: <img src="img/${teamMember.photo}">.
  </li>`
  
  // 5. Uso le cards di bootstrap per presentare i singoli membri
  cards +=
  `<div class="col">
    <div class="card">
      <img src="img/${teamMember.photo}" class="card-img-top" alt="member-photo">
      <div class="card-body">
        <h5 class="card-title">${teamMember.completeName}</h5>
        <p class="card-text">Ruolo: ${teamMember.position}</p>
      </div>
    </div>
  </div>`
}

// 6. Preparo la row da inserire in pagina
const row = 
`<div class="row row-cols-1 row-cols-md-3 g-4">
  ${cards}
</div>`

// 3. Stampo le informazioni in pagina
list.innerHTML = items;

// 7. Stampo nuovamente le info in pagina
cardsBox.innerHTML = row;


