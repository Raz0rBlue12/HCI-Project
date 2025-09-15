const showcasesTier = [
    {
        tier: {
            name: "Tier-S",
            href: "#showcase-tier-s",
        },
        image: "../assets/Asphalt-9-Chrystler-ME412.jpg",
        name: "Asphalt 9 Chrystler ME412",
    },
    {
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/Nio-EP9.jpg",
    name: "Nio-EP9",
},
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/SCG-003S.jpg",
    name: "SCG 003S",
},
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/Lamborghini-Diablo-GT.jpg",
    name: "Lamborghini Diablo GT",
},
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/TVR-Griffith.jpg",
    name: "TVR-Griffith",
},
];

for (const showcase of showcasesTier) {
    document.querySelector("#showcase-tier > #cards-showcase").innerHTML += `
        <div id="card-car">
        <div id="card-header">
            <img src="${showcase.image}" alt="cars" />
            <div id="card-header-text">
            <h4>${showcase.name}</h4>
            </div>
        </div>
        <h3 id="card-title">
            <a class="link" href="${showcase.tier.href}">
            ${showcase.tier.name}
            </a>
        </h3>
        </div>
    `;
}

const showcasesTierS = [
{
    tier: {
    name: "Tier-S",
    href: "#showcase-tier-s",
    },
    image: "../assets/Ajlani-Drakuma.jpg",
    name: "Ajlani Drakuma",
},
{
    tier: {
    name: "Tier-S",
    href: "#showcase-tier-s",
    },
    image: "../assets/Ferrari-SF90-Stradale.jpg",
    name: "Ferrari SF90 Stradale",
},
{
    tier: {
    name: "Tier-S",
    href: "#showcase-tier-s",
    },
    image: "../assets/Ultima-RS.jpg",
    name: "Ultima RS",
},
{
    tier: {
    name: "Tier-S",
    href: "#showcase-tier-s",
    },
    image: "../assets/Vision-1789.jpg",
    name: "Vision-1789",
},
{
    tier: {
    name: "Tier-S",
    href: "#showcase-tier-s",
    },
    image: "../assets/Lamborghini-Centenario.jpg",
    name: "Lamborghini Centenario",
},
{
    tier: {
    name: "Tier-S",
    href: "#showcase-tier-s",
    },
    image: "../assets/Trion-Nemesis.jpg",
    name: "Trion-Nemesis",
},
];

for (const showcase of showcasesTierS) {
    document.querySelector("#showcase-tier-s > #cards-showcase").innerHTML += `
        <div id="card-car">
        <div id="card-header">
            <img src="${showcase.image}" alt="cars" />
            <div id="card-header-text">
            <h4>${showcase.name}</h4>
            </div>
        </div>
        <h3 id="card-title">
            <a class="link" href="${showcase.tier.href}">
            ${showcase.tier.name}
            </a>
        </h3>
        </div>
    `;
}

const showcasesTierA = [
{
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/McLaren-Senna-GTR.jpg",
    name: "McLaren Senna GTR",
},
{
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/McLaren-P1tm.jpg",
    name: "McLaren P1tm",
},
{
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/SCG-007S.jpg",
    name: "SCG-007S",
},
{
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/Lamborghini-SC18-1.jpg",
    name: "Lamborghini SC18 1",
},
{
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/Ferrari-J50.jpg",
    name: "Ferrari-J50",
},
{
    tier: {
    name: "Tier-A",
    href: "#showcase-tier-a",
    },
    image: "../assets/Jaguar-C-X75.jpg",
    name: "Jaguar-C-X75",
},
];

for (const showcase of showcasesTierA) {
    document.querySelector("#showcase-tier-a > #cards-showcase").innerHTML += `
        <div id="card-car">
        <div id="card-header">
            <img src="${showcase.image}" alt="cars" />
            <div id="card-header-text">
            <h4>${showcase.name}</h4>
            </div>
        </div>
        <h3 id="card-title">
            <a class="link" href="${showcase.tier.href}">
            ${showcase.tier.name}
            </a>
        </h3>
        </div>
    `;
}

const showcasesTierB = [
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/Apex-AP-0.jpg",
    name: "Apex AP 0",
},
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/Apollo-IE.jpg",
    name: "Apollo IE",
},
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/Apollo-N.jpg",
    name: "Apollo N",
},
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/Arash-AF10.jpg",
    name: "Arash AF10",
},
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/Drako-GTE.jpg",
    name: "Drako GTE",
},
{
    tier: {
    name: "Tier-B",
    href: "#showcase-tier-b",
    },
    image: "../assets/Ford-GT.jpg",
    name: "Ford GT",
},
];

for (const showcase of showcasesTierB) {
    document.querySelector("#showcase-tier-b > #cards-showcase").innerHTML += `
        <div id="card-car">
        <div id="card-header">
            <img src="${showcase.image}" alt="cars" />
            <div id="card-header-text">
            <h4>${showcase.name}</h4>
            </div>
        </div>
        <h3 id="card-title">
            <a class="link" href="${showcase.tier.href}">
            ${showcase.tier.name}
            </a>
        </h3>
        </div>
    `;
}

const showcasesTierC = [
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/Saleen-S1.jpg",
    name: "Saleen S1",
},
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/Ferrari-F40.jpg",
    name: "Ferrari F40",
},
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/Brabham-BT62.jpg",
    name: "Brabham BT62",
},
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/BMW-M4-GTS.jpg",
    name: "BMW M4 GTS",
},
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/Bolwell-MK-X-Nagari-500.jpg",
    name: "Bolwell MK X Nagari 500",
},
{
    tier: {
    name: "Tier-C",
    href: "#showcase-tier-c",
    },
    image: "../assets/Bugatti-EB110.jpg",
    name: "Bugatti EB110",
},
];

for (const showcase of showcasesTierC) {
    document.querySelector("#showcase-tier-c > #cards-showcase").innerHTML += `
        <div id="card-car">
        <div id="card-header">
            <img src="${showcase.image}" alt="cars" />
            <div id="card-header-text">
            <h4>${showcase.name}</h4>
            </div>
        </div>
        <h3 id="card-title">
            <a class="link" href="${showcase.tier.href}">
            ${showcase.tier.name}
            </a>
        </h3>
        </div>
    `;
}

const showcasesTierD = [
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/Lotus-Emira.jpg",
    name: "Lotus-Emira",
},
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/Mazda-Furai.jpg",
    name: "Mazda-Furai",
},
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/Lotus-Elise-Sprint-220.jpg",
    name: "Lotus-Elise-Sprint-220",
},
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/Ginetta-G60.jpg",
    name: "Ginetta-G60",
},
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/glickenhaus-004c.jpg",
    name: "glickenhaus-004c",
},
{
    tier: {
    name: "Tier-D",
    href: "#showcase-tier-d",
    },
    image: "../assets/Honda-Civic-Type-R.jpg",
    name: "Honda-Civic-Type-R",
},
];

for (const showcase of showcasesTierD) {
    document.querySelector("#showcase-tier-d > #cards-showcase").innerHTML += `
        <div id="card-car">
        <div id="card-header">
            <img src="${showcase.image}" alt="cars" />
            <div id="card-header-text">
            <h4>${showcase.name}</h4>
            </div>
        </div>
        <h3 id="card-title">
            <a class="link" href="${showcase.tier.href}">
            ${showcase.tier.name}
            </a>
        </h3>
        </div>
    `;
}
