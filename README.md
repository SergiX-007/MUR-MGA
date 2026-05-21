# MUR → MGA — Calculateur de transfert

> **MCB (Maurice) → Orange Money (Madagascar)**  
> Calculez en temps réel le montant reçu en Ariary et les frais appliqués à chaque transaction.

[![PWA](https://img.shields.io/badge/PWA-installable-blueviolet?style=flat-square&logo=pwa)](./index.html)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=flat-square&logo=python&logoColor=white)](./Py/transfert_mur_mga.py)
[![Tkinter](https://img.shields.io/badge/UI-Tkinter-informational?style=flat-square)](./Py/transfert_mur_mga.py)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

---

## Aperçu

Ce projet existe en **deux versions** :

| Version | Fichier | Technologie |
|---|---|---|
| 🌐 Web PWA | `index.html` | HTML / CSS / JS — installable sur mobile et desktop |
| 🖥️ Desktop | `Py/transfert_mur_mga.py` | Python 3 + Tkinter |

---

## Fonctionnement

Les deux frais sont appliqués à chaque transaction :

| Frais | Taux | Appliqué sur |
|---|---|---|
| MCB (frais en ligne) | **2.6 %** | Montant en MUR |
| Orange Money | **5.0 %** | Montant converti en MGA |

### Deux modes de calcul

**Mode 1 — J'ai X MUR**  
Vous renseignez votre budget total en roupies. L'outil calcule le net transféré, les frais déduits, et le montant exact reçu en Ariary.

**Mode 2 — La personne doit recevoir X Ariary**  
Vous ciblez un montant précis en Ariary. L'outil remonte le calcul pour déterminer exactement combien débiter de votre compte MCB (frais inclus).

---

## Structure du dépôt

```
MUR-MGA/
├── index.html           # Application web PWA
├── manifest.json        # Manifest PWA (icônes, thème, display)
├── sw.js                # Service worker — cache offline
├── background.jpg       # Image de fond
├── icons/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
└── Py/
    ├── transfert_mur_mga.py   # Source Python
    ├── MUR-MGA                # Binaire compilé (PyInstaller — Linux)
    └── MUR-MGA.spec           # Spec PyInstaller
```

---

## Version Web (PWA)

### Utilisation directe

Ouvrez `index.html` dans un navigateur. Aucun serveur requis pour tester localement.

### Installation comme PWA

Pour que le service worker fonctionne (cache offline, installation), le fichier doit être servi via **HTTPS** ou `localhost`.

```bash
# Exemple avec Python
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```
Ou bien aller sur le lien de la page Github : [[Cliquer ici](https://sergix-007.github.io/MUR-MGA/)]

Sur Chrome / Edge : bouton **"Installer"** dans la barre d'adresse.  
Sur iOS Safari : **Partager → Sur l'écran d'accueil**.

---

## Version Desktop (Python)

### Prérequis

```
Python 3.8+
tkinter (inclus dans la plupart des distributions Python)
```

### Lancer le script

```bash
python3 Py/transfert_mur_mga.py
```

### Lancer le binaire compilé (Linux)

```bash
chmod +x Py/MUR-MGA
./Py/MUR-MGA
```

> Le binaire `MUR-MGA` est compilé pour **Linux x86-64** avec PyInstaller.  
> Pour Windows ou macOS, recompiler depuis le source :

```bash
pip install pyinstaller
pyinstaller Py/MUR-MGA.spec
```

---

## Formules

### Mode "J'ai X MUR"

```
S          = MUR / (1 + 0.026 + 0.05)
Frais MCB  = S × 0.026
Frais OM   = S × 0.05
Reçu (Ar)  = S × cours
Total (Rs) = MUR  ← budget de départ
```

### Mode "Envoyer X Ariary"

```
S          = Ar / cours
Frais MCB  = S × 0.026
Frais OM   = Ar × 0.05
Total (Rs) = S + Frais MCB + (Frais OM / cours)
```

---

## Contribuer

Les taux MCB et Orange Money peuvent évoluer.  
Pour les mettre à jour :

- **Web** → constantes `MCB` et `OM` en tête de `<script>` dans `index.html`
- **Python** → constantes `FRAIS_MCB` et `FRAIS_OM` en haut de `transfert_mur_mga.py`

---

## Licence

MIT — libre d'utilisation, modification et distribution.
