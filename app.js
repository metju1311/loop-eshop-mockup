const STORAGE_KEY = "petal-loop-demo-v1";
const THEME_KEY = "petal-loop-theme";

const products = [
    // {
    //   id: "bear",
    //   name: "Bavlněný medvídek",
    //   category: "Hračky",
    //   price: 29,
    //   kind: "bear",
    //   productionDays: 4,
    //   description: "Měkký ručně háčkovaný medvídek. Každý kus je vyrobený na objednávku.",
    //   options: [
    //     { key:"size", label:"Velikost", type:"chips", required:true, values:[
    //       {value:"small", label:"S", price:0}, {value:"medium", label:"M", price:4}, {value:"large", label:"L", price:8}
    //     ]},
    //     { key:"color", label:"Barva", type:"swatches", required:true, values:[
    //       {value:"cream", label:"Krémová", color:"#ead7cf", price:0},
    //       {value:"dusty", label:"Starorůžová", color:"#d98eab", price:1},
    //       {value:"mocha", label:"Kakao", color:"#9c6d60", price:1},
    //       {value:"sage", label:"Šalvějová", color:"#9caf9a", price:1}
    //     ]},
    //     { key:"hat", label:"Čepice", type:"chips", required:false, values:[
    //       {value:"none", label:"Bez", price:0}, {value:"beanie", label:"Pletená", price:3}, {value:"winter", label:"Zimní", price:5}
    //     ]},
    //     { key:"embroider", label:"Výšivka jména", type:"text", required:false, placeholder:"Např. Ema", price:4 }
    //   ]
    // },
    // {
    //   id: "sweater",
    //   name: "Oversize kardigán",
    //   category: "Oblečení",
    //   price: 89,
    //   kind: "sweater",
    //   productionDays: 12,
    //   requiresMeasurements: true,
    //   description: "Ručně háčkovaný kardigán podle tvých měr. Velikost je orientační; samotný výrobek se vyrábí podle zadaných rozměrů.",
    //   options: [
    //     { key:"size", label:"Střih", type:"chips", required:true, values:[
    //       {value:"cropped", label:"Cropped", price:0}, {value:"regular", label:"Regular", price:8}, {value:"long", label:"Long", price:14}
    //     ]},
    //     { key:"color", label:"Barva příze", type:"swatches", required:true, values:[
    //       {value:"blush", label:"Blush", color:"#e8a8c1", price:0},
    //       {value:"rose", label:"Rose", color:"#ca718f", price:0},
    //       {value:"cream", label:"Cream", color:"#eadfda", price:0},
    //       {value:"plum", label:"Plum", color:"#80566f", price:3}
    //     ]},
    //     { key:"sleeve", label:"Rukáv", type:"chips", required:true, values:[
    //       {value:"short", label:"3/4", price:0}, {value:"long", label:"Dlouhý", price:4}, {value:"extra", label:"Prodloužený", price:7}
    //     ]}
    //   ],
    //   measurements: [
    //     {key:"chest", label:"Obvod hrudníku (cm)", help:"Měř přes nejširší místo."},
    //     {key:"waist", label:"Obvod pása (cm)", help:"Měř přirozeně, bez stažení."},
    //     {key:"hips", label:"Obvod bokov (cm)", help:"Měř přes nejširší místo."},
    //     {key:"sleeve", label:"Délka rukávu (cm)", help:"Od ramenního bodu po zápěstí."},
    //     {key:"length", label:"Celková délka (cm)", help:"Od ramene po požadovaný spodní lem."},
    //     {key:"shoulder", label:"Šířka ramen (cm)", help:"Od jednoho ramenního bodu k druhému."}
    //   ]
    // },
    // {
    //   id: "bag",
    //   name: "Mini kabelka Bloom",
    //   category: "Doplňky",
    //   price: 45,
    //   kind: "bag",
    //   productionDays: 6,
    //   description: "Pevná mini kabelka s možností kombinovat barvu těla, popruhu a detailu.",
    //   options: [
    //     { key:"color", label:"Tělo kabelky", type:"swatches", required:true, values:[
    //       {value:"pink", label:"Pudrová", color:"#e7adbf", price:0},
    //       {value:"berry", label:"Berry", color:"#b85f84", price:2},
    //       {value:"cream", label:"Cream", color:"#eadfda", price:0},
    //       {value:"graphite", label:"Grafit", color:"#4b4146", price:1}
    //     ]},
    //     { key:"strap", label:"Popruh", type:"chips", required:true, values:[
    //       {value:"short", label:"Krátky", price:0}, {value:"long", label:"Dlouhý", price:4}
    //     ]},
    //     { key:"charm", label:"Květinový přívěsek", type:"chips", required:false, values:[
    //       {value:"none", label:"Bez", price:0}, {value:"rose", label:"Růže", price:3}, {value:"daisy", label:"Kopretina", price:3}
    //     ]}
    //   ]
    // },
    // {
    //   id: "bunny",
    //   name: "Zajíček na spaní",
    //   category: "Hračky",
    //   price: 34,
    //   kind: "bunny",
    //   productionDays: 5,
    //   description: "Měkký společník pro děti, s možností zvolit barvu, uši a malou dečku.",
    //   options: [
    //     { key:"color", label:"Barva", type:"swatches", required:true, values:[
    //       {value:"pink", label:"Jemná růžová", color:"#edb4c9", price:0},
    //       {value:"cream", label:"Krémová", color:"#eee3dc", price:0},
    //       {value:"sage", label:"Šalvějová", color:"#a4b39d", price:1}
    //     ]},
    //     { key:"blanket", label:"Mini dečka", type:"chips", required:false, values:[
    //       {value:"none", label:"Bez", price:0}, {value:"yes", label:"Ano", price:6}
    //     ]},
    //     { key:"embroidery", label:"Malá výšivka", type:"text", required:false, placeholder:"Např. Lili", price:4 }
    //   ]
    // },
    // {
    //   id: "mug",
    //   name: "Háčkovaný obal na hrnek",
    //   category: "Doplňky",
    //   price: 17,
    //   kind: "bag",
    //   productionDays: 2,
    //   description: "Malý doplněk na každodenní hrnek, vhodný i jako drobný dárek.",
    //   options: [
    //     { key:"color", label:"Barva", type:"swatches", required:true, values:[
    //       {value:"blush", label:"Blush", color:"#e7adbf", price:0},
    //       {value:"rose", label:"Rose", color:"#ca718f", price:0},
    //       {value:"cream", label:"Cream", color:"#eadfda", price:0},
    //       {value:"brown", label:"Karamel", color:"#a57661", price:0}
    //     ]}
    //   ]
    // },
    // {
    //   id: "set",
    //   name: "Dárková sada Bloom",
    //   category: "Sady",
    //   price: 59,
    //   kind: "bear",
    //   productionDays: 7,
    //   description: "Sada tří drobností v jedné barevné paletě. Ideální jako dárek.",
    //   options: [
    //     { key:"palette", label:"Paleta", type:"chips", required:true, values:[
    //       {value:"blush", label:"Blush", price:0}, {value:"rose", label:"Rose", price:0}, {value:"berry", label:"Berry", price:2}
    //     ]},
    //     { key:"card", label:"Dárková karta", type:"chips", required:false, values:[
    //       {value:"none", label:"Bez", price:0}, {value:"yes", label:"Ano", price:2}
    //     ]}
    //   ]
    // },
    {
        id: "dumpling",
        name: "Háčkovaný knedlíček",
        image: "assets/dumpling.jpg",
        category: "Hračky",
        price: 190,
        kind: "bear",
        productionDays: 3,
        description: "Roztomilý mini knedlíček, ručně háčkovaný. Skvělý jako přívěsek nebo dekorace.",
        options: [
            {
                key: "color", label: "Barva", type: "swatches", required: true, values: [
                    {value: "cream", label: "Krémová", color: "#eae0d5", price: 0},
                    {value: "pink", label: "Růžová", color: "#edadc6", price: 0},
                    {value: "brown", label: "Karamel", color: "#b87a55", price: 0}
                ]
            },
            {
                key: "size", label: "Velikost", type: "chips", required: true, values: [
                    {value: "mini", label: "Mini", price: 0}, {value: "standard", label: "Normální", price: 4}
                ]
            },
            {
                key: "keychain", label: "Přívěsek na klíče", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 2}
                ]
            }
        ]
    },
    {
        id: "kabelka",
        name: "Háčkovaná kabelka",
        image: "assets/kabelka.jpg",
        category: "Doplňky",
        price: 550,
        kind: "bag",
        productionDays: 8,
        inStock: true,
        stockCount: 3,
        description: "Prostorná kabelka s pevnou konstrukcí, ideální na každodenní nošení.",
        options: [
            {
                key: "color", label: "Barva těla", type: "swatches", required: true, values: [
                    {value: "beige", label: "Béžová", color: "#d9c5b2", price: 0},
                    {value: "rose", label: "Starorůžová", color: "#c9889e", price: 1},
                    {value: "sage", label: "Šalvějová", color: "#8faa8e", price: 1},
                    {value: "graphite", label: "Grafit", color: "#4a4047", price: 2}
                ]
            },
            {
                key: "strap", label: "Popruh", type: "chips", required: true, values: [
                    {value: "short", label: "Krátký", price: 0}, {
                        value: "long",
                        label: "Dlouhý",
                        price: 5
                    }, {value: "both", label: "Oba", price: 8}
                ]
            },
            {
                key: "lining", label: "Podšívka", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 7}
                ]
            }
        ]
    },
    {
        id: "kocka",
        name: "Háčkovaná kočička",
        image: "assets/kocka.jpg",
        category: "Hračky",
        price: 320,
        kind: "bear",
        productionDays: 5,
        inStock: true,
        stockCount: 5,
        description: "Roztomilá plyšová kočička ručně háčkovaná z měkké bavlny.",
        options: [
            {
                key: "color", label: "Barva", type: "swatches", required: true, values: [
                    {value: "cream", label: "Krémová", color: "#ede3d9", price: 0},
                    {value: "gray", label: "Šedá", color: "#a0a0a0", price: 0},
                    {value: "ginger", label: "Zrzavá", color: "#c97b3f", price: 1},
                    {value: "black", label: "Černá", color: "#2e2e2e", price: 0}
                ]
            },
            {
                key: "bow", label: "Mašlička", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 2}
                ]
            },
            {
                key: "embroidery",
                label: "Výšivka jména",
                type: "text",
                required: false,
                placeholder: "Např. Micka",
                price: 4
            }
        ]
    },
    {
        id: "kuratko",
        name: "Háčkované kuřátko",
        image: "assets/kuratko.jpg",
        category: "Hračky",
        price: 240,
        kind: "bunny",
        productionDays: 3,
        description: "Malé žluté kurátko s výrazným zobáčkem. Výborný dárek pro nejmenší.",
        options: [
            {
                key: "color", label: "Barva", type: "swatches", required: true, values: [
                    {value: "yellow", label: "Žlutá", color: "#f5d55c", price: 0},
                    {value: "white", label: "Bílá", color: "#f5f0eb", price: 0},
                    {value: "pink", label: "Růžová", color: "#f0b0c8", price: 0}
                ]
            },
            {
                key: "size", label: "Velikost", type: "chips", required: true, values: [
                    {value: "small", label: "S", price: 0}, {value: "medium", label: "M", price: 5}
                ]
            },
            {
                key: "keychain", label: "Přívěsek na klíče", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 2}
                ]
            }
        ]
    },
    {
        id: "kvety",
        name: "Háčkované květiny",
        image: "assets/kvety.jpg",
        category: "Dekorace",
        price: 220,
        kind: "bag",
        productionDays: 4,
        description: "Buket ručně háčkovaných kvítků, které nevyblednou. Skvělá dekorace i dárek.",
        options: [
            {
                key: "palette", label: "Paleta barev", type: "chips", required: true, values: [
                    {value: "blush", label: "Blush", price: 0}, {
                        value: "spring",
                        label: "Jarní",
                        price: 0
                    }, {value: "wildflower", label: "Luční", price: 2}
                ]
            },
            {
                key: "count", label: "Počet kvítků", type: "chips", required: true, values: [
                    {value: "3", label: "3 ks", price: 0}, {value: "5", label: "5 ks", price: 7}, {
                        value: "8",
                        label: "8 ks",
                        price: 14
                    }
                ]
            },
            {
                key: "vase", label: "Mini váza", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 5}
                ]
            }
        ]
    },
    {
        id: "lilie",
        name: "Háčkovaná lilie",
        image: "assets/lilie.jpg",
        category: "Dekorace",
        price: 180,
        kind: "bag",
        productionDays: 3,
        description: "Elegantní háčkovaná lilie na stonek. Krásná dekorace do vázy nebo jako brož.",
        options: [
            {
                key: "color", label: "Barva", type: "swatches", required: true, values: [
                    {value: "white", label: "Bílá", color: "#f5f0eb", price: 0},
                    {value: "pink", label: "Růžová", color: "#edadc6", price: 0},
                    {value: "peach", label: "Broskvová", color: "#f0c09e", price: 0},
                    {value: "purple", label: "Fialová", color: "#9b7ab5", price: 1}
                ]
            },
            {
                key: "stem", label: "Stonek", type: "chips", required: true, values: [
                    {value: "short", label: "Krátký (15 cm)", price: 0}, {
                        value: "long",
                        label: "Dlouhý (30 cm)",
                        price: 3
                    }
                ]
            },
            {
                key: "brooch", label: "Brož klip", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 3}
                ]
            }
        ]
    },
    {
        id: "maslicka",
        name: "Háčkovaná mašlička",
        image: "assets/maslicka.jpg",
        category: "Doplňky",
        price: 140,
        kind: "bag",
        productionDays: 2,
        description: "Rozkošná háčkovaná mašlička jako sponka do vlasů nebo ozdoba na dárek.",
        options: [
            {
                key: "color", label: "Barva", type: "swatches", required: true, values: [
                    {value: "pink", label: "Růžová", color: "#edadc6", price: 0},
                    {value: "cream", label: "Krémová", color: "#ede3d9", price: 0},
                    {value: "red", label: "Červená", color: "#c94c4c", price: 0},
                    {value: "blue", label: "Modrá", color: "#7badc9", price: 0}
                ]
            },
            {
                key: "use", label: "Použití", type: "chips", required: true, values: [
                    {value: "clip", label: "Sponka do vlasů", price: 0}, {
                        value: "elastic",
                        label: "Gumička",
                        price: 0
                    }, {value: "brooch", label: "Brož", price: 2}
                ]
            },
            {
                key: "size", label: "Velikost", type: "chips", required: true, values: [
                    {value: "small", label: "S", price: 0}, {value: "large", label: "L", price: 2}
                ]
            }
        ]
    },
    {
        id: "pes",
        name: "Háčkovaný pejsek",
        image: "assets/pes.jpg",
        category: "Hračky",
        price: 350,
        kind: "bear",
        productionDays: 5,
        inStock: true,
        stockCount: 2,
        description: "Věrný plyšový pejsek ručně háčkovaný z měkké bavlny. Každý kus unikát.",
        options: [
            {
                key: "color", label: "Barva srsti", type: "swatches", required: true, values: [
                    {value: "cream", label: "Krémová", color: "#ede3d9", price: 0},
                    {value: "brown", label: "Hnědá", color: "#8b5e3c", price: 0},
                    {value: "black", label: "Černá", color: "#2e2e2e", price: 0},
                    {value: "spotted", label: "Skvrnitá", color: "#c7b08a", price: 2}
                ]
            },
            {
                key: "collar", label: "Obojek", type: "chips", required: false, values: [
                    {value: "none", label: "Bez", price: 0}, {value: "yes", label: "Ano", price: 3}
                ]
            },
            {
                key: "embroidery",
                label: "Výšivka jména",
                type: "text",
                required: false,
                placeholder: "Např. Rex",
                price: 4
            }
        ]
    },
    {
        id: "top",
        name: "Háčkovaný top",
        image: "assets/top.jpg",
        category: "Oblečení",
        price: 650,
        kind: "sweater",
        productionDays: 10,
        requiresMeasurements: true,
        description: "Letní háčkovaný top vyrobený přesně podle tvých měr. Moderní střih, ručně zpracovaný.",
        options: [
            {
                key: "color", label: "Barva příze", type: "swatches", required: true, values: [
                    {value: "cream", label: "Smetanová", color: "#eadfda", price: 0},
                    {value: "blush", label: "Blush", color: "#e8a8c1", price: 0},
                    {value: "terracotta", label: "Terakota", color: "#b8623c", price: 2},
                    {value: "sage", label: "Šalvějová", color: "#9caf9a", price: 1}
                ]
            },
            {
                key: "neckline", label: "Výstřih", type: "chips", required: true, values: [
                    {value: "round", label: "Kulatý", price: 0}, {
                        value: "square",
                        label: "Hranatý",
                        price: 0
                    }, {value: "v", label: "V-střih", price: 0}
                ]
            },
            {
                key: "strap", label: "Ramínka", type: "chips", required: true, values: [
                    {value: "thin", label: "Tenká", price: 0}, {value: "wide", label: "Široká", price: 2}
                ]
            }
        ],
        measurements: [
            {key: "chest", label: "Obvod hrudníku (cm)", help: "Měř přes nejširší místo."},
            {key: "waist", label: "Obvod pása (cm)", help: "Měř přirozeně, bez stažení."},
            {key: "length", label: "Délka topku (cm)", help: "Od ramene po požadovaný spodní lem."}
        ]
    },
    {
        id: "tresne",
        name: "Třešňová klíčenka",
        image: "assets/tresne.jpg",
        category: "Doplňky",
        price: 160,
        kind: "bag",
        productionDays: 2,
        description: "Háčkované třešničky jako roztomilá klíčenka. Lehké a výrazné.",
        options: [
            {
                key: "color", label: "Barva třešní", type: "swatches", required: true, values: [
                    {value: "red", label: "Červená", color: "#c03030", price: 0},
                    {value: "pink", label: "Růžová", color: "#edadc6", price: 0},
                    {value: "black", label: "Tmavá višeň", color: "#4a1a2a", price: 0}
                ]
            },
            {
                key: "length", label: "Délka", type: "chips", required: true, values: [
                    {value: "short", label: "Krátká", price: 0}, {value: "long", label: "Dlouhá", price: 2}
                ]
            }
        ]
    }
];

const state = loadState();
let currentView = "home";
let selectedCategory = "Všechny";
let selectedProduct = null;
let toastTimer = null;

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        return {
            cart: [],
            user: {mode: "guest", name: "", email: ""},
            orders: [],
            productionCapacity: 8
        };
    }
    try {
        return {...JSON.parse(saved), cart: JSON.parse(saved).cart || []};
    } catch {
        return {cart: [], user: {mode: "guest"}, orders: [], productionCapacity: 8};
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currency(n) {
    return new Intl.NumberFormat("cs-CZ", {style: "currency", currency: "CZK"}).format(n);
}

function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
}

function productById(id) {
    return products.find(p => p.id === id);
}

function cartCount() {
    return state.cart.reduce((n, x) => n + x.qty, 0);
}

function showToast(msg) {
    let el = document.querySelector(".toast");
    if (!el) {
        el = document.createElement("div");
        el.className = "toast";
        document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function go(view) {
    currentView = view;
    location.hash = view;
    if (view === "home" || view === "shop" || view === "categories") renderHome();
    if (view === "admin") renderAdmin();
    if (view === "checkout") renderCheckout();
}

function getTheme() {
    return localStorage.getItem(THEME_KEY) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('[data-action="toggle-theme"]');
    if (btn) btn.textContent = theme === "dark" ? "☀" : "☾";
}

function visual(kind, image) {
    if (image) return `<div class="product-thumb product-thumb--photo" data-kind="${kind}"><img src="${esc(image)}" alt="" loading="lazy"></div>`;
    return `<div class="product-thumb" data-kind="${kind}"><div class="shape"></div></div>`;
}

function productCard(p) {
    const tags = [];
    if (p.requiresMeasurements) tags.push("Velikost na míru");
    tags.push(p.inStock ? `✓ Na sklade (${p.stockCount} ks)` : `${p.productionDays} dní výroby`);
    return `<article class="product-card">
    <a href="#product/${p.id}" class="product-image">
      ${visual(p.kind, p.image)}
      <span class="tag">${esc(p.category)}</span>
    </a>
    <div class="product-body">
      <div class="product-meta">${tags.join(" • ")}</div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.description)}</p>
      <div class="product-row">
        <div class="price">od ${currency(p.price)}</div>
        <button class="btn btn-ghost" data-action="open-product" data-id="${p.id}">Zobrazit</button>
      </div>
    </div>
  </article>`;
}

function renderHome() {
    const app = document.querySelector("#app");
    const categories = ["Všechny", ...new Set(products.map(p => p.category))];
    if (!categories.includes(selectedCategory)) selectedCategory = "Všechny";
    const list = selectedCategory === "Všechny" ? products : products.filter(p => p.category === selectedCategory);
    app.innerHTML = `
    <section class="hero" id="home">
      <div class="hero-copy">
        <span class="eyebrow">Ručně háčkované • s láskou • na objednávku</span>
        <h1>Každý kousek vzniká přímo pro tebe.</h1>
        <p>Vyrábím háčkované výrobky na míru — od roztomilých hraček až po módní doplňky. Každý kousek je originál.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#shop">Zobrazit kolekci →</a>
        </div>
        <div class="pill-row">
          <span class="pill">✦ Handmade</span>
          <span class="pill">✦ Na objednávku</span>
          <span class="pill">✦ Každý kousek unikát</span>
        </div>
      </div>
      <div class="hero-art">
        <div class="stitch-grid stitch-grid--photo"><img src="assets/hero.jpg" alt="Háčkované výrobky" class="hero-photo"/></div>
      </div>
    </section>

    <section class="section" id="shop">
      <div class="section-head">
        <div><span class="eyebrow">Kolekce</span><h2>Vyber si svůj kousek</h2></div>
<!--        <p>Každý produkt může mít vlastní možnosti, pravidla, mírová pole a příplatky — bez potřeby měnit frontend.</p>-->
      </div>
      <div class="filters">${categories.map(c => `<button class="filter ${c === selectedCategory ? 'active' : ''}" data-action="filter" data-category="${esc(c)}">${esc(c)}</button>`).join("")}</div>
      <div class="products-grid" style="margin-top:16px">${list.map(productCard).join("")}</div>
    </section>

<!--    <section class="section" id="categories">-->
<!--      <div class="section-head"><div><span class="eyebrow">Jak je to postavené</span><h2>Funkce připravené na další růst</h2></div></div>-->
<!--      <div class="feature-grid">-->
<!--        <div class="feature-card"><div class="feature-icon">⚙</div><h3>Konfigurátor</h3><p>Varianty, doplňky, podmíněné volby a příplatky se dají skládat z dat.</p></div>-->
<!--        <div class="feature-card"><div class="feature-icon">⌁</div><h3>Míry</h3><p>Produkt určí, která mírová pole se mají zobrazit a která jsou povinná.</p></div>-->
<!--        <div class="feature-card"><div class="feature-icon">◷</div><h3>Výroba</h3><p>ETA kombinuje základní čas výroby a aktuálně rozpracované objednávky.</p></div>-->
<!--      </div>-->
<!--    </section>-->

    <section class="section" id="about">
      <div class="about-layout">
        <div class="about-copy panel">
          <span class="eyebrow">O mně</span>
          <h2>Ahoj, já jsem Tina ✿</h2>
          <p>Každý kousek háčkuji ručně s láskou a péčí o detail. Vyrábím na objednávku — takže každý výrobek je unikátní a vyrobený přímo pro tebe.</p>
          <p>Inspiruji se přírodou, pastely a pohodou. Hledáš-li originální dárek nebo něco zvláštního pro sebe, jsi na správném místě.</p>
          <div class="social-links">
            <a class="social-btn" href="https://www.instagram.com/loop.by.tina" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              @loop.by.tina
            </a>
            <a class="social-btn" href="https://www.tiktok.com/@crochet.by.t1na" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              @crochet.by.t1na
            </a>
            <a class="social-btn social-btn--primary" href="https://linktr.ee/crochetbytina" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Všetky linky
            </a>
          </div>
        </div>
        <div class="tiktok-col panel">
          <span class="eyebrow">Na TikToku</span>
          <div class="tiktok-grid">
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@crochet.by.t1na" data-unique-id="crochet.by.t1na" data-embed-type="creator" style="max-width:100%;min-width:0"> <section> <a target="_blank" href="https://www.tiktok.com/@crochet.by.t1na?refer=creator_embed">@crochet.by.t1na</a> </section> </blockquote>
          </div>
        </div>
      </div>
    </section>
  `;
    bindCommon();
    document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => {
        selectedCategory = b.dataset.category;
        renderHome();
    }));
    if (document.querySelector('.tiktok-embed')) {
        const existing = document.querySelector('script[src*="tiktok.com/embed"]');
        if (existing) existing.remove();
        const s = document.createElement('script');
        s.src = 'https://www.tiktok.com/embed.js';
        s.async = true;
        document.body.appendChild(s);
    }
}

function renderProduct(id) {
    const p = productById(id);
    if (!p) return go("home");
    selectedProduct = p;
    const defaults = {};
    p.options.forEach(o => {
        if (o.type === "text") defaults[o.key] = "";
        else defaults[o.key] = o.values[0].value;
    });
    const current = {...defaults};
    const productEta = calculateEta(p);

    const app = document.querySelector("#app");
    app.innerHTML = `
    <section class="section">
      <button class="btn btn-ghost" data-action="back-shop">← Zpět na produkty</button>
    </section>
    <section class="section detail">
      <div class="detail-visual">
        ${visual(p.kind, p.image)}
        <div class="pill-row">
          ${p.inStock ? `<span class="pill">✓ Na sklade (${p.stockCount} ks)</span>` : `<span class="pill">⏱ základ výroby: ${p.productionDays} dní</span>`}
          ${p.requiresMeasurements ? `<span class="pill">📏 vyžaduje míry</span>` : `<span class="pill">✓ standardní rozměry</span>`}
        </div>
      </div>
      <div class="detail-copy">
        <span class="eyebrow">${esc(p.category)}</span>
        <h2>${esc(p.name)}</h2>
        <div class="detail-price" id="detail-price">${currency(p.price)}</div>
        <p>${esc(p.description)}</p>
        <div class="notice"><strong>Odhadovaný termín:</strong> objednávky dnes jsou při aktuální zátěži přibližně hotové za <strong>${productEta.days} dní</strong>.</div>
        <div id="options-host"></div>
        ${p.requiresMeasurements ? `<div class="option-section">
          <div class="option-head"><div><label>Míry</label> <span class="required">* povinné</span><div class="help">Tyto údaje se uloží přímo k položce objednávky.</div></div></div>
          <div class="measure-grid">${p.measurements.map(m => `<div class="field"><label for="m-${m.key}">${esc(m.label)} *</label><input id="m-${m.key}" type="number" min="1" max="250" step="0.5" placeholder="cm"><span class="help">${esc(m.help)}</span></div>`).join("")}</div>
        </div>` : ""}
        <div class="option-section">
          <div class="option-head"><div><label>Poznámka pro výrobce</label><div class="help">Volitelné.</div></div></div>
          <div class="field"><textarea id="note" rows="3" placeholder="Např. prosím napsat věnování..."></textarea></div>
        </div>
        <div class="summary-card">
          <div class="summary-row"><span>Základ</span><strong id="sum-base">${currency(p.price)}</strong></div>
          <div class="summary-row"><span>Příplatky</span><strong id="sum-add">${currency(0)}</strong></div>
          <div class="summary-row"><span>Odhad výroby</span><strong>${productEta.days} dní</strong></div>
          <div class="summary-row total"><span>Celkem za kus</span><strong id="sum-total">${currency(p.price)}</strong></div>
          <div class="hero-actions" style="margin-top:15px">
            <button class="btn btn-primary btn-block" data-action="add-configured">Přidat do košíku</button>
          </div>
        </div>
      </div>
    </section>
  `;

    p.options.forEach(o => renderOption(o, current));

    function renderOption(o, currentObj) {
        const host = document.querySelector("#options-host");
        const section = document.createElement("div");
        section.className = "option-section";
        const head = document.createElement("div");
        head.className = "option-head";
        head.innerHTML = `<div><label>${esc(o.label)}</label>${o.required ? `<span class="required">* povinné</span>` : ""}<div class="help">${o.type === "text" ? "Volitelný text pro personalizaci." : ""}</div></div>`;
        section.appendChild(head);
        if (o.type === "text") {
            const f = document.createElement("div");
            f.className = "field";
            f.innerHTML = `<input type="text" id="opt-${o.key}" placeholder="${esc(o.placeholder || "")}">`;
            section.appendChild(f);
            f.querySelector("input").addEventListener("input", e => {
                currentObj[o.key] = e.target.value;
                updatePrice();
            });
        } else if (o.type === "swatches") {
            const wrap = document.createElement("div");
            wrap.className = "swatches";
            o.values.forEach(v => {
                const b = document.createElement("button");
                b.className = "swatch";
                b.title = `${v.label} (${currency(v.price)})`;
                b.style.background = v.color;
                if (currentObj[o.key] === v.value) b.classList.add("active");
                b.addEventListener("click", () => {
                    currentObj[o.key] = v.value;
                    wrap.querySelectorAll("button").forEach(x => x.classList.remove("active"));
                    b.classList.add("active");
                    updatePrice();
                });
                wrap.appendChild(b);
            });
            section.appendChild(wrap);
            const label = document.createElement("div");
            label.className = "help";
            label.style.marginTop = "8px";
            label.id = `selected-label-${o.key}`;
            label.textContent = o.values.find(v => v.value === currentObj[o.key]).label;
            section.appendChild(label);
        } else {
            const wrap = document.createElement("div");
            wrap.className = "option-grid";
            o.values.forEach(v => {
                const b = document.createElement("button");
                b.className = "option-chip" + (currentObj[o.key] === v.value ? " active" : "");
                b.innerHTML = `${esc(v.label)}${v.price ? `<small style="display:block;color:var(--muted);margin-top:3px">+${currency(v.price)}</small>` : ""}`;
                b.addEventListener("click", () => {
                    currentObj[o.key] = v.value;
                    wrap.querySelectorAll("button").forEach(x => x.classList.remove("active"));
                    b.classList.add("active");
                    updatePrice();
                });
                wrap.appendChild(b);
            });
            section.appendChild(wrap);
        }
        host.appendChild(section);
    }

    function selectedSurcharge() {
        return p.options.reduce((sum, o) => {
            if (o.type === "text") return sum + (current[o.key] ? o.price || 0 : 0);
            const v = o.values.find(x => x.value === current[o.key]);
            return sum + (v?.price || 0);
        }, 0);
    }

    function updatePrice() {
        const add = selectedSurcharge();
        const total = p.price + add;
        document.querySelector("#sum-add").textContent = currency(add);
        document.querySelector("#sum-total").textContent = currency(total);
        document.querySelector("#detail-price").textContent = currency(total);
        p.options.forEach(o => {
            if (o.type === "swatches") {
                const lbl = document.querySelector(`#selected-label-${o.key}`);
                if (lbl) {
                    const v = o.values.find(v => v.value === current[o.key]);
                    lbl.textContent = v?.label || "";
                }
            }
        });
    }

    document.querySelector('[data-action="add-configured"]').addEventListener("click", () => {
        if (p.requiresMeasurements) {
            const measurements = {};
            let invalid = false;
            p.measurements.forEach(m => {
                const v = document.querySelector(`#m-${m.key}`).value;
                if (!v) invalid = true; else measurements[m.key] = Number(v);
            });
            if (invalid) {
                showToast("Vyplň všechny požadované míry.");
                return;
            }
            addCartItem({
                p,
                current,
                total: p.price + selectedSurcharge(),
                measurements,
                note: document.querySelector("#note").value
            });
        } else addCartItem({
            p,
            current,
            total: p.price + selectedSurcharge(),
            measurements: {},
            note: document.querySelector("#note").value
        });
    });
    bindCommon();
}

function addCartItem({p, current, total, measurements, note}) {
    const snapshot = p.options.map(o => {
        if (o.type === "text") return {name: o.label, value: current[o.key], price: o.price || 0};
        const v = o.values.find(v => v.value === current[o.key]);
        return {name: o.label, value: v?.label || current[o.key], price: v?.price || 0};
    });
    state.cart.push({
        id: crypto.randomUUID(),
        productId: p.id,
        name: p.name,
        kind: p.kind,
        basePrice: p.price,
        unitPrice: total,
        qty: 1,
        options: snapshot,
        measurements,
        note
    });
    saveState();
    updateCartBadge();
    showToast("Produkt byl přidán do košíku.");
    openCart();
}

function calculateEta(p) {
    // Demo: active production queue consumes a fraction of daily capacity.
    const activeDays = state.orders.filter(o => ["new", "in_production"].includes(o.status))
        .reduce((s, o) => s + (o.productionDays || 0), 0);
    const capacity = Math.max(1, state.productionCapacity || 8);
    const queueDays = Math.ceil(activeDays / capacity);
    return {days: p.productionDays + queueDays, queueDays};
}

function renderCheckout() {
    if (!state.cart.length) {
        document.querySelector("#app").innerHTML = `<section class="section panel"><span class="eyebrow">Checkout</span><h2>Košík je prázdný</h2><p>Nejprve si vyber výrobek.</p><a href="#shop" class="btn btn-primary">Zpět do obchodu</a></section>`;
        return;
    }
    const subtotal = state.cart.reduce((s, x) => s + x.unitPrice * x.qty, 0);
    const production = Math.max(...state.cart.map(x => productById(x.productId).productionDays));
    const eta = calculateEta(productById(state.cart[0].productId));
    document.querySelector("#app").innerHTML = `
    <section class="section"><span class="eyebrow">Objednávka</span><h2>Dokonči svůj nákup</h2></section>
    <section class="section checkout-layout">
      <div>
        <div class="panel">
          <div class="section-head"><div><h3>Kontaktní údaje</h3><p>Účet není potřeba.</p></div></div>
          <div class="radio-row">
            <label class="radio-card"><input type="radio" name="checkout-mode" value="guest" ${state.user.mode !== "account" ? "checked" : ""}> <strong>Nakoupit bez registrace</strong><span class="help">Nejrychlejší cesta k objednávce.</span></label>
            <label class="radio-card"><input type="radio" name="checkout-mode" value="account" ${state.user.mode === "account" ? "checked" : ""}> <strong>Vytvořit účet</strong><span class="help">Později uvidíš historii objednávek.</span></label>
          </div>
          <div class="form-grid" style="margin-top:16px">
            <div class="field"><label>Jméno a příjmení *</label><input id="c-name" value="${esc(state.user.name || "")}" placeholder="Jana Nováková"></div>
            <div class="field"><label>E-mail *</label><input id="c-email" type="email" value="${esc(state.user.email || "")}" placeholder="jana@example.com"></div>
            <div class="field full"><label>Adresa *</label><input id="c-address" placeholder="Ulica 12"></div>
            <div class="field"><label>Město *</label><input id="c-city" placeholder="Praha"></div>
            <div class="field"><label>PSČ *</label><input id="c-zip" placeholder="101 00"></div>
          </div>
        </div>
        <div class="panel">
          <h3>Doprava</h3>
          <div class="radio-row">
            <label class="radio-card"><input type="radio" name="shipping" value="ppl-pickup" checked> <strong>PPL – výdejní místo</strong><span class="help">76 Kč</span></label>
            <label class="radio-card"><input type="radio" name="shipping" value="zasilkovna-pickup"> <strong>Zásilkovna – výdejní místo</strong><span class="help">89 Kč</span></label>
            <label class="radio-card"><input type="radio" name="shipping" value="balikovana-pickup"> <strong>Balíkovna – výdejní místo</strong><span class="help">79 Kč</span></label>
            <label class="radio-card"><input type="radio" name="shipping" value="ppl-address"> <strong>PPL – na adresu</strong><span class="help">106 Kč</span></label>
            <label class="radio-card"><input type="radio" name="shipping" value="balikovana-address"> <strong>Balíkovna – na adresu</strong><span class="help">105 Kč</span></label>
            <label class="radio-card"><input type="radio" name="shipping" value="packeta-sk"> <strong>Packeta SK – výdejní místo</strong><span class="help">99 Kč • doprava na Slovensko</span></label>
          </div>
        </div>
        <div class="panel">
          <h3>Platba</h3>
          <div class="notice">Po odeslání objednávky ti zašleme <strong>platební údaje na e-mail</strong>. Objednávka bude zpracována po přijetí platby.</div>
        </div>
        <div class="panel">
          <h3>Souhlas a odeslání</h3>
          <label style="display:flex;gap:9px;align-items:flex-start"><input id="terms" type="checkbox" style="margin-top:3px"> <span class="help">Souhlasím s podmínkami objednávky a zpracováním údajů pro vyřízení objednávky.</span></label>
          <button class="btn btn-primary btn-block" data-action="place-order" style="margin-top:15px">Odeslat objednávku</button>
        </div>
      </div>
      <aside class="panel">
        <span class="eyebrow">Souhrn</span><h3>Produkty</h3>
        ${state.cart.map(x => `<div class="cart-item">
          <div class="cart-mini">${visual(x.kind).replace('product-thumb', 'product-thumb')}</div>
          <div><h4>${esc(x.name)}</h4><small>${x.qty} ks • ${x.options.filter(o => o.value).map(o => esc(o.name + ": " + o.value)).join(" • ")}</small></div>
          <div class="cart-price">${currency(x.unitPrice * x.qty)}</div>
        </div>`).join("")}
        <div class="summary-card">
          <div class="summary-row"><span>Mezisoučet</span><strong>${currency(subtotal)}</strong></div>
          <div class="summary-row"><span>Doprava</span><strong id="checkout-shipping">${currency(0)}</strong></div>
          <div class="summary-row"><span>Orientační výroba</span><strong>${production + eta.queueDays} dní</strong></div>
          <div class="summary-row total"><span>Celkem</span><strong id="checkout-total">${currency(subtotal)}</strong></div>
        </div>
      </aside>
    </section>
  `;
    const shippingFees = {
        "ppl-pickup": 76,
        "zasilkovna-pickup": 89,
        "balikovana-pickup": 79,
        "ppl-address": 106,
        "balikovana-address": 105,
        "packeta-sk": 99
    };
    document.querySelectorAll('[name="shipping"]').forEach(r => r.addEventListener("change", () => {
        const fee = shippingFees[document.querySelector('[name="shipping"]:checked').value] || 0;
        document.querySelector("#checkout-shipping").textContent = currency(fee);
        document.querySelector("#checkout-total").textContent = currency(subtotal + fee);
    }));
    document.querySelector('[name="shipping"][value="ppl-pickup"]').dispatchEvent(new Event("change"));
    document.querySelector('[data-action="place-order"]').addEventListener("click", placeOrder);
    bindCommon();
}

function placeOrder() {
    const name = document.querySelector("#c-name").value.trim(),
        email = document.querySelector("#c-email").value.trim();
    const address = document.querySelector("#c-address").value.trim(),
        city = document.querySelector("#c-city").value.trim(), zip = document.querySelector("#c-zip").value.trim();
    const mode = document.querySelector('[name="checkout-mode"]:checked').value;
    const shipping = document.querySelector('[name="shipping"]:checked').value;
    if (!name || !email || !address || !city || !zip) {
        showToast("Vyplň všechny povinné údaje.");
        return;
    }
    if (!document.querySelector("#terms").checked) {
        showToast("Potvrď souhlas s podmínkami.");
        return;
    }
    const productionDays = state.cart.reduce((s, x) => s + (productById(x.productId).productionDays * x.qty), 0);
    const shippingFees = {
        "ppl-pickup": 76,
        "zasilkovna-pickup": 89,
        "balikovana-pickup": 79,
        "ppl-address": 106,
        "balikovana-address": 105,
        "packeta-sk": 99
    };
    const fee = shippingFees[shipping] || 0;
    const subtotal = state.cart.reduce((s, x) => s + x.unitPrice * x.qty, 0);
    const order = {
        id: "PL-" + new Date().getFullYear() + "-" + String(state.orders.length + 1).padStart(4, "0"),
        createdAt: new Date().toISOString(), customer: {name, email, address, city, zip}, mode, shipping,
        items: structuredClone(state.cart), subtotal, shippingFee: fee, total: subtotal + fee,
        productionDays, status: "new", queueImpact: productionDays
    };
    state.orders.unshift(order);
    state.cart = [];
    state.user = {mode, name, email};
    saveState();
    updateCartBadge();
    document.querySelector("#app").innerHTML = `
    <section class="section panel">
      <span class="eyebrow">Objednávka odeslána</span>
      <h2>Děkujeme, ${esc(name)}.</h2>
      <div class="success-box">
        <strong>Číslo objednávky: ${esc(order.id)}</strong>
        <p style="margin:6px 0 0">Orientační výroba: ${order.productionDays} dní. Při změně vytíženosti se termín může upravit.</p>
      </div>
      <div class="hero-actions">
          <a class="btn btn-primary" href="#shop">Pokračovat v nákupu</a>
          <!--<button class="btn btn-ghost" data-action="open-admin">Otevřít admin demo</button>-->
      </div>
    </section>
  `;
    bindCommon();
}

function renderAdmin() {
    const active = state.orders.filter(o => o.status !== "done");
    const totalRevenue = state.orders.reduce((s, o) => s + o.total, 0);
    const activeDays = active.reduce((s, o) => s + (o.productionDays || 0), 0);
    const cap = Math.max(1, state.productionCapacity || 8);
    const utilisation = Math.min(100, Math.round((activeDays / (cap * 7)) * 100));
    document.querySelector("#app").innerHTML = `
    <section class="section">
      <span class="eyebrow">Admin demo</span>
      <h2>Přehled obchodu</h2>
      <p>Tato obrazovka ukazuje směr, kterým může jít budoucí Angular administrace.</p>
    </section>
    <section class="section stats">
      <div class="stat"><span>Objednávky</span><strong>${state.orders.length}</strong></div>
      <div class="stat"><span>Tržba demo</span><strong>${currency(totalRevenue)}</strong></div>
      <div class="stat"><span>Aktivní výroba</span><strong>${activeDays} dní</strong></div>
      <div class="stat"><span>Vytíženost</span><strong>${utilisation}%</strong></div>
    </section>
    <section class="section admin-layout">
      <div>
        <div class="panel">
          <div class="section-head"><div><span class="eyebrow">Objednávky</span><h3>Fronta výroby</h3></div></div>
          <div class="table-wrap">
            <table><thead><tr><th>ID</th><th>Zákazník</th><th>Obsah</th><th>Stav</th><th>Výroba</th></tr></thead>
            <tbody>${state.orders.length ? state.orders.map(o => `<tr>
              <td><strong>${esc(o.id)}</strong><div class="help">${new Date(o.createdAt).toLocaleDateString("cs-CZ")}</div></td>
              <td>${esc(o.customer.name)}<div class="help">${esc(o.customer.email)}</div></td>
              <td>${o.items.length} položek</td>
              <td><span class="status ${o.status === "done" ? "done" : o.status === "in_production" ? "active" : "pending"}">${o.status === "new" ? "Nová" : o.status === "in_production" ? "Ve výrobě" : "Hotová"}</span></td>
              <td>${o.productionDays} dní</td>
            </tr>`).join("") : `<tr><td colspan="5"><div class="empty">Zatím nemáš žádné objednávky.</div></td></tr>`}</tbody></table>
          </div>
        </div>
        <div class="panel">
          <span class="eyebrow">Kapacita výroby</span>
          <h3>Nastavení modelu ETA</h3>
          <p>Demo předpokládá jednu výrobní jednotku s denní kapacitou v hodinách. Vyšší rozpracovanost prodlouží termín nových objednávek.</p>
          <div class="field"><label>Denní kapacita (demo hodiny)</label><input id="capacity" type="number" min="1" max="24" value="${cap}"></div>
          <div class="metric-bar" style="margin-top:13px"><span style="width:${utilisation}%"></span></div>
          <div class="help" style="margin-top:7px">Aktuální spotřeba fronty: ${activeDays} / ${cap * 7} hodin za 7 dní.</div>
          <button class="btn btn-ghost" data-action="save-capacity" style="margin-top:12px">Uložit kapacitu</button>
        </div>
      </div>
      <aside>
        <div class="panel">
          <span class="eyebrow">Katalog</span><h3>${products.length} demo produktů</h3>
          <div class="admin-card-grid">${products.map(p => `<div class="feature-card"><strong>${esc(p.name)}</strong><div class="help" style="margin-top:5px">${esc(p.category)} • ${currency(p.price)} • ${p.options.length} konfiguračních skupin</div><button class="btn btn-ghost" style="margin-top:9px;padding:8px 10px" data-action="open-product" data-id="${p.id}">Náhled</button></div>`).join("")}</div>
        </div>
        <div class="panel">
          <span class="eyebrow">Data</span>
          <h3>Demo nástroje</h3>
          <p>Objednávky a nastavení jsou v localStorage prohlížeče.</p>
          <button class="btn btn-danger btn-block" data-action="reset-demo">Resetovat demo data</button>
        </div>
      </aside>
    </section>
  `;
    bindCommon();
    document.querySelector('[data-action="save-capacity"]').addEventListener("click", () => {
        state.productionCapacity = Math.max(1, Number(document.querySelector("#capacity").value || 8));
        saveState();
        showToast("Kapacita uložená.");
        renderAdmin();
    });
    document.querySelector('[data-action="reset-demo"]').addEventListener("click", () => {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    });
}

function updateCartBadge() {
    document.querySelector("#cart-count").textContent = cartCount();
}

function openCart() {
    renderCart();
    document.querySelector("#cart-drawer").classList.add("open");
    document.querySelector("#drawer-backdrop").classList.add("open");
    document.querySelector("#cart-drawer").setAttribute("aria-hidden", "false");
}

function closeCart() {
    document.querySelector("#cart-drawer").classList.remove("open");
    document.querySelector("#drawer-backdrop").classList.remove("open");
    document.querySelector("#cart-drawer").setAttribute("aria-hidden", "true");
}

function renderCart() {
    const body = document.querySelector("#cart-content"), foot = document.querySelector("#cart-footer");
    if (!state.cart.length) {
        body.innerHTML = `<div class="empty">Košík čeká na tvou první objednávku ✿</div>`;
        foot.innerHTML = `<a class="btn btn-ghost btn-block" href="#shop">Zobrazit produkty</a>`;
        return;
    }
    body.innerHTML = state.cart.map((x, i) => `<div class="cart-item">
    <div class="cart-mini">${visual(x.kind)}</div>
    <div><h4>${esc(x.name)}</h4><small>${x.options.filter(o => o.value).map(o => esc(o.name + ": " + o.value)).join(" • ")}</small><div class="qty"><button data-action="qty" data-i="${i}" data-delta="-1">−</button><strong>${x.qty}</strong><button data-action="qty" data-i="${i}" data-delta="1">+</button></div></div>
    <div class="cart-price">${currency(x.unitPrice * x.qty)}</div>
  </div>`).join("");
    const total = state.cart.reduce((s, x) => s + x.unitPrice * x.qty, 0);
    foot.innerHTML = `<div class="summary-row total"><span>Celkem</span><strong>${currency(total)}</strong></div><a class="btn btn-primary btn-block" href="#checkout">Pokladna</a>`;
    body.querySelectorAll('[data-action="qty"]').forEach(b => b.addEventListener("click", () => {
        const i = Number(b.dataset.i), d = Number(b.dataset.delta);
        state.cart[i].qty += d;
        if (state.cart[i].qty <= 0) state.cart.splice(i, 1);
        saveState();
        updateCartBadge();
        renderCart();
    }));
}

function bindCommon() {
    document.querySelectorAll('[data-action="open-product"]').forEach(b => b.addEventListener("click", () => {
        renderProduct(b.dataset.id);
        window.scrollTo({top: 0, behavior: "smooth"});
    }));
    const back = document.querySelector('[data-action="back-shop"]');
    if (back) back.addEventListener("click", () => go("shop"));
    document.querySelector('[data-action="open-admin"]')?.addEventListener("click", () => go("admin"));
}

document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const a = el.dataset.action;
    if (a === "toggle-theme") applyTheme(getTheme() === "dark" ? "light" : "dark");
    if (a === "open-cart") openCart();
    if (a === "close-cart") closeCart();
    if (a === "toggle-menu") document.querySelector(".main-nav").classList.toggle("open");
    if (a === "open-admin") go("admin");
    if (a === "filter") {
        selectedCategory = el.dataset.category;
        renderHome();
    }
});

document.querySelector("#drawer-backdrop").addEventListener("click", closeCart);
window.addEventListener("hashchange", () => {
    closeCart();
    const hash = location.hash.slice(1);
    if (hash.startsWith("product/")) renderProduct(hash.split("/")[1]);
    else if (hash === "admin") renderAdmin();
    else if (hash === "checkout") renderCheckout();
    else renderHome();
});

applyTheme(getTheme());
updateCartBadge();
const firstHash = location.hash.slice(1);
if (firstHash.startsWith("product/")) renderProduct(firstHash.split("/")[1]);
else if (firstHash === "admin") renderAdmin();
else if (firstHash === "checkout") renderCheckout();
else renderHome();
