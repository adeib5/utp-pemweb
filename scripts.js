const games = [

  {name:"Elden Ring",genre:"rpg",mood:"hardcore",platform:"pc",desc:"RPG brutal open world. Mati itu biasa, bangkit itu wajib. Jangan rewel.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/E3Huy2cdih0"},
  {name:"The Witcher 3",genre:"rpg",mood:"story",platform:"pc",desc:"Story RPG terbaik. Main satu chapter bisa bikin lupa makan.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/c0i88t0Kacs"},
  {name:"Cyberpunk 2077",genre:"rpg",mood:"story",platform:"pc",desc:"RPG futuristik. Bug banyak, tapi gayanya keren, bro.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/8X2kIfS6fb8"},
  {name:"Skyrim",genre:"rpg",mood:"chill",platform:"pc",desc:"Petualangan bebas. Bisa jadi penyelamat dunia atau tukang gali kuburan, terserah.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/JSRtYpNRoN0"},
  {name:"Hogwarts Legacy",genre:"rpg",mood:"story",platform:"pc",desc:"Dunia Harry Potter. Bisa jadi penyihir baik, atau nyebelin kayak Draco.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/1O6Qstncpnc"},
  {name:"Stardew Valley",genre:"rpg",mood:"chill",platform:"pc",desc:"Farming santai. Tanam wortel, tapi jangan lupa gosok gigi.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/ot7uXNQskhs"},
  {name:"The Sims 4",genre:"rpg",mood:"chill",platform:"pc",desc:"Simulasi hidup. Bisa bikin orang bahagia atau sengsara. Kamu penjahatnya.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/GJENRAB4ykA"},
  {name:"Hades",genre:"rpg",mood:"hardcore",platform:"pc",desc:"Ngebunuh dewa? Check. Mati? Check. Kapan menangnya? Entahlah.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/6iLzzM0q8F4"},
  {name:"Diablo IV",genre:"rpg",mood:"hardcore",platform:"pc",desc:"Hack and loot sepuasnya. Diablo bilang hi, kamu bilang bye.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1711330/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/FuPwlCkAg4o"},
  {name:"Baldur's Gate 3",genre:"rpg",mood:"story",platform:"pc",desc:"Story RPG kelas berat. Dialog panjang bisa bikin tidur sebentar.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/9h1OeGmZB3k"},

  {name:"God of War",genre:"action",mood:"story",platform:"console",desc:"Kratos nendang pantat dewa itu kebiasaan sehari-hari.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/K0u_kAWLJOA"},
  {name:"Spider-Man",genre:"action",mood:"chill",platform:"console",desc:"Ayunan bebas. Bisa bikin lupa kerjaan.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/t06RUxPbp_c"},
  {name:"Sekiro",genre:"action",mood:"hardcore",platform:"pc",desc:"Samurai brutal. Mati 1000 kali? Santai aja, itu olahraga.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/rXMX4YJ7Lks"},
  {name:"Devil May Cry 5",genre:"action",mood:"hardcore",platform:"pc",desc:"Hack and slash cepat. Combo panjang, ego makin panjang.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/KMSGj9Y2T9Q"},
  {name:"Assassin Creed Valhalla",genre:"action",mood:"story",platform:"pc",desc:"Viking open world. Main pedang, tapi hati-hati sama NPC marah.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/ssrNcwxALS4"},
  {name:"Monster Hunter Rise",genre:"action",mood:"chill",platform:"pc",desc:"Hunting monster. Monster kuat, tapi ego pemain lebih kuat.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/4dXwIFrju1U"},
  {name:"Ghostrunner",genre:"action",mood:"hardcore",platform:"pc",desc:"Parkour plus pedang. Mati sekali = marah sendiri.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1139900/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/_QyTdo3Vzqc"},
  {name:"Dying Light 2",genre:"action",mood:"chill",platform:"pc",desc:"Parkour plus zombie. Bisa nyebelin, bisa seru.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/5x6l9FGJ8p0"},
  {name:"Bayonetta 3",genre:"action",mood:"hardcore",platform:"console",desc:"Stylish chaos. Combo panjang, kepala meledak, puasnya maksimal.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/gE2r6u4bTS8"},
  {name:"Control",genre:"action",mood:"story",platform:"pc",desc:"Telekinesis keren. Tapi jangan coba di dunia nyata.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/870780/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/8kF73VtQZ_g"},

  {name:"GTA V",genre:"openworld",mood:"chill",platform:"pc",desc:"Sandbox bebas. Bisa jadi pahlawan kota atau kriminal paling bego.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/QkkoHAzjnUs"},
  {name:"Red Dead Redemption 2",genre:"openworld",mood:"story",platform:"console",desc:"Koboi realistis. Kuda lebih pintar dari kamu, bro.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/gmA6MrX81z4"},
  {name:"Watch Dogs 2",genre:"openworld",mood:"chill",platform:"pc",desc:"Hack dunia. Bisa jadi hacker nyeleneh atau hacker galau.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/447040/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/hh9x4NqW0Dw"},
  {name:"Far Cry 6",genre:"openworld",mood:"story",platform:"pc",desc:"Revolusi open world. Meledakkan tank sambil minum kopi, normal banget.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/-IJuKT1mHO8"},
  {name:"Assassin's Creed Odyssey",genre:"openworld",mood:"story",platform:"console",desc:"Jalan-jalan ke Yunani. Pedang + filosofi = hidup lebih bijak.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/WXckk7t-N2A"},
  {name:"The Legend of Zelda: Breath of the Wild",genre:"openworld",mood:"chill",platform:"console",desc:"Explorasi bebas. Bisa jadi master chef atau penyelamat Hyrule.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1243050/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/1rPxiXXxftE"},
  {name:"Horizon Forbidden West",genre:"openworld",mood:"story",platform:"console",desc:"Robot dinosaurus? Main aman-aman aja.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/O_UFjZy71ps"},
  {name:"Ghost of Tsushima",genre:"openworld",mood:"chill",platform:"console",desc:"Samurai santai. Angin berhembus, musuh terkapar.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1096900/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/EZr1K7pZzSE"},
  {name:"Skate 3",genre:"openworld",mood:"fun",platform:"console",desc:"Skateboard open world. Bisa bikin kaki sakit, hati senang.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/983500/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/ZvGk6YTPNkk"},
  {name:"Just Cause 4",genre:"openworld",mood:"hardcore",platform:"pc",desc:"Ledakan + parasut = kepuasan maksimal.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/512520/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/d4Dg_-Jq7WY"},

  {name:"Phasmophobia",genre:"horror",mood:"chill",platform:"pc",desc:"Hantu bareng temen. Jangan jerit, nanti dibilang penakut.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/sRa9oeo5KiY"},
  {name:"Resident Evil 4",genre:"horror",mood:"hardcore",platform:"pc",desc:"Zombie action. Kepala zombie = target latihan.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/Id2EaldBaWw"},
  {name:"Outlast",genre:"horror",mood:"hardcore",platform:"pc",desc:"Horror ekstrem. Lari doang, tapi takutnya maksimal.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/238320/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/uKA-IA4locM"},
  {name:"The Forest",genre:"horror",mood:"chill",platform:"pc",desc:"Survival horror. Bisa bikin pohon musuh, seriusan.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/ay3tDjnBziY"},
  {name:"Little Nightmares",genre:"horror",mood:"story",platform:"pc",desc:"Horror puzzle creepy. Anak kecil tapi nyebelin banget.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/424840/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/aOadxZBsPiA"},
  {name:"Amnesia",genre:"horror",mood:"hardcore",platform:"pc",desc:"Horror klasik. Lupa siapa diri sendiri, tapi tetap takut.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/57300/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/u1nY_5-UrY4"},
  {name:"Dead by Daylight",genre:"horror",mood:"hardcore",platform:"pc",desc:"Survivor dikejar killer. Lari sambil nangis itu opsional.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/IqKZ0xmrMbY"},
  {name:"Alien: Isolation",genre:"horror",mood:"hardcore",platform:"console",desc:"Alien nyebelin. Jangan salah langkah, bro.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/214490/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/Gp9pI2gSyNk"},
  {name:"Layers of Fear",genre:"horror",mood:"story",platform:"pc",desc:"Psycho painter. Lihat lukisan sambil mikir 'kok serem ya'.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/391720/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/4cTxR6n58Xo"},
  {name:"Until Dawn",genre:"horror",mood:"story",platform:"console",desc:"Teen horror klasik. Salah keputusan = bye-bye karakter.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/367860/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/cc-qIEO0p4Y"},


  {name:"Forza Horizon 5",genre:"racing",mood:"chill",platform:"console",desc:"Balap mobil santai. Bisa nabrak pohon, tetap senyum.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/yRLx2xQ5Z7k"},
  {name:"Rocket League",genre:"racing",mood:"fun",platform:"pc",desc:"Mobil ngegol. Kadang skill, kadang luck, kadang emosi.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/6u2cYNzCxJ0"},
  {name:"Need for Speed Heat",genre:"racing",mood:"hardcore",platform:"console",desc:"Balap liar. Polisi nyebelin? Santai, ngegas aja.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/X6hVG0xfkjg"},
  {name:"Mario Kart 8",genre:"racing",mood:"fun",platform:"console",desc:"Balap kart. Bisa lempar pisang, balas dendam manis.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1087730/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/qfFeh4wH7IA"},
  {name:"Gran Turismo 7",genre:"racing",mood:"chill",platform:"console",desc:"Simulasi realistis. Main aman-aman, tapi tetap seru.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1634930/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/wL4QJIbajQg"},


  {name:"Cuphead",genre:"platformer",mood:"hardcore",platform:"pc",desc:"Gambar lucu, musuh nyebelin. Tangan bisa copot, tapi nyali tetap.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/1k8craCGpgs"},
  {name:"Hollow Knight",genre:"platformer",mood:"chill",platform:"pc",desc:"Metroidvania cakep. Mati berkali-kali tapi tetap kalem.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/UAO2urG23S4"},
  {name:"Celeste",genre:"platformer",mood:"hardcore",platform:"pc",desc:"Loncat tinggi. Stress? Emang, tapi puasnya maksimal.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/7nMqH9R2gP0"},
  {name:"Ori and the Will of the Wisps",genre:"platformer",mood:"chill",platform:"console",desc:"Platform cantik. Mata senang, jari pegal.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/6bVKlx8wwQ8"},
  {name:"Super Mario Odyssey",genre:"platformer",mood:"fun",platform:"console",desc:"Mario lagi-lagi nyelamatin dunia. Nyawa banyak, tapi tetap semangat.", img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg", trailer:"https://www.youtube-nocookie.com/embed/5kcdRBHM7kM"},
];
function register() {
  let user = document.getElementById("username")?.value;
  let pass = document.getElementById("password")?.value;
  let msg = document.getElementById("msg");

  if (!user || !pass) {
    if (msg) msg.innerHTML = "Isi semua field!";
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  if (msg) {
    msg.style.color = "lightgreen";
    msg.innerHTML = "Akun berhasil dibuat!";
  }
}

function login() {
  let user = document.getElementById("username")?.value;

  if (!user) {
    alert("Masukin username dulu!");
    return;
  }

  localStorage.setItem("user", user);
  window.location.href = "pages2.html";
}


function showUser() {
  let el = document.getElementById("user");
  if (!el) return;

  let user = localStorage.getItem("user");
  el.innerHTML = user ? user : "Guest";
}



function savePreference() {
  let genre = document.getElementById("genre")?.value;
  let mood = document.getElementById("mood")?.value;
  let platform = document.getElementById("platform")?.value;

  localStorage.setItem("genre", genre);
  localStorage.setItem("mood", mood);
  localStorage.setItem("platform", platform);

  window.location.href = "pages4.html";
}



function showResult() {
  let result = document.getElementById("result");
  let img = document.getElementById("gameImage");

  if (!result || !img) return;

  let genre = localStorage.getItem("genre");
  let mood = localStorage.getItem("mood");
  let platform = localStorage.getItem("platform");

  let filtered = games.filter(g =>
    g.genre === genre &&
    g.mood === mood &&
    g.platform === platform
  );

  if (filtered.length === 0) {
    filtered = games.filter(g => g.genre === genre);
  }

  if (filtered.length === 0) {
    result.innerHTML = "Game tidak ditemukan 😢";
    img.style.display = "none";
    return;
  }

  let game = filtered[Math.floor(Math.random() * filtered.length)];

  localStorage.setItem("selectedGame", JSON.stringify(game));

  result.innerHTML = `🎮 ${game.name}`;
  img.src = game.img;
}



function showDetail() {
  let game = JSON.parse(localStorage.getItem("selectedGame"));

  let detail = document.getElementById("detail");
  let trailer = document.getElementById("trailer");

  if (!detail || !trailer || !game) return;

  detail.innerHTML = `
    <h2>${game.name}</h2>
    <p>${game.desc}</p>
    <span>🎮 ${game.genre} | ${game.platform}</span>
  `;

  trailer.src = game.trailer;
}


window.onload = function () {
  showUser();
  showResult();
  showDetail();
};
