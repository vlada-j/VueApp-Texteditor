## Public modul

Sve strane za koje korisnik ne mora da bude logovan - otud ime `public`. Kada se bude buildovao, sve iz ovog foldera ide u jedan bundle (`public.js`) koji se ucitava kada `authGard` odbije ne logovanog usera.

Ja sam ovde stavio samo dve strane, ali moze da se doda i strana za kontakt, o nama itd. Ili cak da se napravi glomaznija `landing` strana (slicno ko kod Nitesa), pa da tako dobijes kao malu pod aplikaciju za ovaj feature. I sve to ti je u ovom jednom folderu.

### public.js - Public servis

Ovde idu razne reuse-abilne funkcionalnosti za ovaj modul, i kominikacija sa serverom. Za veci modul verovatno bi imalo vise smisla da imamo vise ovakvih specijalizovanih fajlova, ali posto je mali, sve sam spakovao u jedan uopsteni.