# Crochet by Tina — handmade e-shop mockup

Samostatný funkčný mockup e-shopu pre ručne háčkované výrobky.

## Spustenie jedným klikom

### macOS

Dvakrát klikni na `start.command`.

Ak macOS blokuje spustenie:

```bash
chmod +x start.command
```

### Windows

Dvakrát klikni na `start.bat`.

### Linux

Dvakrát klikni na `start.sh` alebo spusti:

```bash
./start.sh
```

Alternatíva: otvor priamo `index.html` v prehliadači.

## Čo demo obsahuje

- responzívny storefront
- svetlý / tmavý motív
- ružovú dizajnovú paletu
- kategórie a filtrovanie produktov
- produktový detail
- varianty a príplatky
- voliteľné customizácie (napr. čiapka, výšivka)
- dynamické mierové polia pri oblečení
- poznámku pre výrobcu
- košík s úpravou množstva
- guest checkout aj registráciu
- dopravu
- platbu prevodom / dobierkou (karta zámerne nie je implementovaná)
- vytvorenie objednávky
- uloženie dát do localStorage
- admin dashboard
- front výroby
- výpočet orientačného termínu podľa základného výrobného času + rozpracovanosti
- nastavenie demo výrobnej kapacity
- reset demo dát

## Dizajn systém

Hlavné CSS premenné sú v `styles.css`:

- `--bg`
- `--surface`
- `--surface-2`
- `--surface-3`
- `--text`
- `--muted`
- `--border`
- `--primary`
- `--primary-strong`
- `--primary-soft`
- `--accent`
- `--success`
- `--warning`
- `--danger`

Pre dark mode je samostatná sada v:

```css
[data-theme="dark"] {
    ...
}
```

To je zámerne spravené tak, aby sa neskôr dala paleta jednoducho pretaviť do Angular Material/Tailwind/CSS variables.

## Ďalší krok do Angularu

Odporúčaná štruktúra pri prenose:

```text
core/
  models/
  api/
  auth/
  theme/

shop/
  product-list/
  product-detail/
  product-configurator/
  cart/
  checkout/

admin/
  dashboard/
  products/
  orders/
  production/

shared/
  ui/
  forms/
```

Demo zatiaľ simuluje backend cez localStorage. Produkčný Spring Boot môže potom prevziať:

```text
Product
ProductVariant
CustomizationGroup
CustomizationOption
MeasurementDefinition
Order
OrderItem
ProductionQueue
Customer
Media
```
