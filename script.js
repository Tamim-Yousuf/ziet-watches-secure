// SAFE HARDCODED DATA (No APIs)
const watches = [
  {
    brand: "Daniel Klein",
    model: "Classic",
    price: "1,200 QAR",
    image: "https://via.placeholder.com/300x300?text=Daniel+Klein",
    whatsapp: "https://wa.me/97470013720?text=I%20want%20to%20buy%20Daniel%20Klein%20Classic"
  },
  {
    brand: "Bigotti",
    model: "Elegance", 
    price: "850 QAR",
    image: "https://via.placeholder.com/300x300?text=Bigotti",
    whatsapp: "https://wa.me/97470013720?text=I%20want%20to%20buy%20Bigotti%20Elegance"
  }
];

// Display watches
document.getElementById('watches-container').innerHTML = watches.map(watch => `
  <div class="watch-card">
    <img src="${watch.image}" alt="${watch.brand}">
    <h3>${watch.brand} ${watch.model}</h3>
    <p>${watch.price}</p>
    <a href="${watch.whatsapp}" class="inquire-btn">WhatsApp Inquiry</a>
  </div>
`).join('');