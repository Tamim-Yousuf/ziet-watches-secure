// SECURE Google Sheets loader
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/13pLfolB8v3H2GrPzh6rSEjfjxiEfxrI8LVpm5OXfe-Y/gviz/tq?tqx=out:json';

fetch(SHEET_URL)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const watches = json.table.rows.map(row => ({
      brand: row.c[0].v,
      model: row.c[1].v,
      price: row.c[2].v + ' QAR',
      image: row.c[4]?.v || 'https://via.placeholder.com/300x300'
    }));

    document.getElementById('watches-container').innerHTML = watches.map(watch => `
      <div class="watch-card">
        <img src="${watch.image}" alt="${watch.brand}">
        <h3>${watch.brand} ${watch.model}</h3>
        <p>${watch.price}</p>
        <a href="https://wa.me/97470013720?text=I%20want%20to%20buy%20${watch.brand}%20${watch.model}" 
           class="inquire-btn">WhatsApp Inquiry</a>
      </div>
    `).join('');
  });