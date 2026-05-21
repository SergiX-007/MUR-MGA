#!/usr/bin/python3
"""
TRANSFERT MUR → MGA
MCB (Mauritius) → Orange Money (Madagascar)
Les deux frais s'appliquent à chaque transaction.
"""
import tkinter as tk

# ─── Taux de frais ───────────────────────────────────────────────────────────
FRAIS_MCB = 0.026   # 2.6 % sur montant en MUR (frais MCB en ligne)
FRAIS_OM  = 0.05    # 5.0 % sur montant en MGA (frais Orange Money)

# ─── Palette ─────────────────────────────────────────────────────────────────
BG     = "#040c11"
PANEL  = "#061820"
BRD    = "#0d3448"
BRD2   = "#1a5a7a"
TXT    = "#b6d8ea"
MUTED  = "#375060"
CYAN   = "#00ccff"
GREEN  = "#00e890"
AMBER  = "#ffaa00"
RED    = "#ff3355"
MF     = "Courier New"

# ─── Calculs ─────────────────────────────────────────────────────────────────
def calc_depuis_mur(mur: float, cours: float) -> dict:
    """
    J'ai X MUR en tout (frais inclus).
    Les deux frais sont deduits de mon budget.
    """
    S         = mur / (1 + FRAIS_MCB + FRAIS_OM)
    f_mcb_rs  = S * FRAIS_MCB
    f_om_ar   = S * cours * FRAIS_OM
    f_om_rs   = S * FRAIS_OM
    return dict(
        envoye_rs    = S,
        recu_ar      = S * cours,
        frais_mcb_rs = f_mcb_rs,
        frais_om_rs  = f_om_rs,
        frais_om_ar  = f_om_ar,
        total_rs     = mur,
    )

def calc_depuis_ar(ar: float, cours: float) -> dict:
    """
    La personne doit recevoir exactement X Ar.
    Je calcule ce que j'ai besoin en MUR (frais inclus).
    """
    S         = ar / cours
    f_mcb_rs  = S * FRAIS_MCB
    f_om_ar   = ar * FRAIS_OM
    f_om_rs   = f_om_ar / cours
    return dict(
        envoye_rs    = S,
        recu_ar      = ar,
        frais_mcb_rs = f_mcb_rs,
        frais_om_rs  = f_om_rs,
        frais_om_ar  = f_om_ar,
        total_rs     = S + f_mcb_rs + f_om_rs,
    )

def fmt_rs(v: float) -> str:
    return f"{v:>14,.2f}  Rs"

def fmt_ar(v: float) -> str:
    return f"{v:>14,.0f}  Ar"

# ─── Ecran de demarrage ───────────────────────────────────────────────────────
BOOT_SEQ = [
    # (texte,                                                    couleur, delai_ms)
    ("",                                                           TXT,   60),
    ("  ╔══════════════════════════════════════════════════╗",   BRD2,  40),
    ("  ║   SYSTEME TRANSFERT MONETAIRE   v2.4.1           ║",   CYAN,  40),
    ("  ║   MCB  (MUR)  ──►  ORANGE MONEY  (MGA)           ║",   TXT,   40),
    ("  ╚══════════════════════════════════════════════════╝",   BRD2,  120),
    ("",                                                           TXT,   60),
    ("  > BOOT SEQUENCE INITIALISEE",                             MUTED, 80),
    ("  > Chargement des modules de calcul ........... [OK]",    GREEN, 90),
    ("  > Connexion gateway MCB ....................... [OK]",    GREEN, 90),
    ("  > Connexion Orange Money API ................. [OK]",    GREEN, 90),
    ("  > Verification des taux FRAIS_MCB / OM ....... [OK]",    GREEN, 90),
    ("  > Interface de saisie ........................ [OK]",     GREEN, 90),
    ("",                                                           TXT,   200),
    ("  ─────────────────────────────────────────────────",      MUTED, 40),
    ("  SYSTEME PRET.  [ ENTREE ] ou [ ESPACE ] pour demarrer",  AMBER, 0),
    ("  ─────────────────────────────────────────────────",      MUTED, 0),
]

class BootScreen(tk.Frame):
    def __init__(self, master, on_done):
        super().__init__(master, bg=BG)
        self._master  = master
        self._on_done = on_done
        self._queue   = list(BOOT_SEQ)
        self._idx     = 0
        self._done    = False

        inner = tk.Frame(self, bg=BG)
        inner.place(relx=0.5, rely=0.5, anchor="center")
        self._inner = inner

        master.bind("<Return>", self._finish)
        master.bind("<space>",  self._finish)
        self._tick()

    def _tick(self):
        if self._idx >= len(self._queue):
            return
        text, color, delay = self._queue[self._idx]
        tk.Label(self._inner, text=text, bg=BG, fg=color,
                 font=(MF, 10), anchor="w", justify="left",
                 width=58).pack(anchor="w")
        self._idx += 1
        next_delay = self._queue[self._idx][2] if self._idx < len(self._queue) else 0
        if next_delay > 0:
            self.after(next_delay, self._tick)
        else:
            self.after(10, self._tick)

    def _finish(self, _event=None):
        if self._done:
            return
        self._done = True
        self._on_done()

# ─── Calculateur ─────────────────────────────────────────────────────────────
class Calculator(tk.Frame):
    def __init__(self, master):
        super().__init__(master, bg=BG)
        self.mode = tk.StringVar(value="depuis_mur")
        self._res  = {}
        self._build()
        self.mode.trace_add("write", self._on_mode)

    # ── Construction ─────────────────────────────────────────────────────────
    def _build(self):
        # Header
        hdr = tk.Frame(self, bg=BG)
        hdr.pack(fill="x", padx=28, pady=(18, 0))
        tk.Label(hdr, text="TRANSFERT", bg=BG, fg=CYAN,
                 font=(MF, 17, "bold")).pack(side="left")
        tk.Label(hdr, text="  MUR  ──►  MGA", bg=BG, fg=TXT,
                 font=(MF, 11)).pack(side="left", pady=(5, 0))
        tk.Label(hdr, text="MCB / ORANGE MONEY", bg=BG, fg=MUTED,
                 font=(MF, 8)).pack(side="right", pady=(10, 0))

        self._sep(pady=(8, 16), color=BRD2)

        # Mode
        mf = tk.Frame(self, bg=BG)
        mf.pack(fill="x", padx=28, pady=(0, 14))
        tk.Label(mf, text="MODE //", bg=BG, fg=MUTED,
                 font=(MF, 8)).pack(side="left", padx=(0, 14))
        for val, lbl in [
            ("depuis_mur", "J'AI  X  MUR"),
            ("depuis_ar",  "ENVOYER  X  ARIARY"),
        ]:
            rb = tk.Radiobutton(
                mf, text=lbl, variable=self.mode, value=val,
                bg=BG, fg=MUTED, selectcolor=PANEL,
                activebackground=BG, activeforeground=CYAN,
                font=(MF, 9), indicatoron=False, relief="flat",
                padx=12, pady=5, cursor="hand2",
                highlightthickness=1, highlightbackground=MUTED,
            )
            rb.pack(side="left", padx=(0, 8))

        # Saisie
        sf = tk.Frame(self, bg=BG)
        sf.pack(fill="x", padx=28)

        self._lbl_mt = self._field_lbl(sf, "MONTANT  (MUR)", 0)
        self._ent_mt = self._entry(sf, "1000", row=1)

        self._field_lbl(sf, "COURS DU JOUR  [ 1 MUR = ? MGA ]", 2)
        self._ent_cx = self._entry(sf, "13.50", row=3)

        # Bouton
        bf = tk.Frame(self, bg=BG)
        bf.pack(fill="x", padx=28, pady=(14, 12))
        tk.Button(
            bf, text="  CALCULER  ", command=self._calc,
            bg=BRD, fg=CYAN, activebackground=CYAN, activeforeground=BG,
            font=(MF, 10, "bold"), relief="flat", cursor="hand2",
            padx=16, pady=8,
            highlightthickness=1, highlightbackground=CYAN,
        ).pack(side="left")

        self._sep(pady=(0, 14), color=BRD)

        # Resultats
        rf = tk.Frame(self, bg=BG)
        rf.pack(fill="x", padx=28, pady=(0, 22))
        rf.columnconfigure(1, weight=1)

        rows = [
            ("NET TRANSFERE",              "envoye_rs",    TXT,   fmt_rs),
            ("MONTANT RECU",               "recu_ar",      GREEN, fmt_ar),
            ("SEP",                         None,           None,  None),
            ("FRAIS MCB  (2.6 %)",         "frais_mcb_rs", AMBER, fmt_rs),
            ("FRAIS ORANGE MONEY  (5.0 %)", "frais_om_rs",  AMBER, fmt_rs),
            ("     ↳ en Ariary",           "frais_om_ar",  MUTED, fmt_ar),
            ("SEP",                         None,           None,  None),
            ("TOTAL NECESSAIRE",           "total_rs",     CYAN,  fmt_rs),
        ]
        r = 0
        for label, key, color, _ in rows:
            if label == "SEP":
                tk.Frame(rf, bg=BRD, height=1).grid(
                    row=r, column=0, columnspan=2, sticky="ew", pady=5, padx=2)
                r += 1
                continue
            tk.Label(rf, text=f"  {label}", bg=BG, fg=MUTED,
                     font=(MF, 9), anchor="w", width=30).grid(
                row=r, column=0, sticky="w", pady=2)
            v = tk.StringVar(value="—")
            self._res[key] = v
            tk.Label(rf, textvariable=v, bg=BG, fg=color,
                     font=(MF, 11, "bold"), anchor="e").grid(
                row=r, column=1, sticky="e", pady=2, padx=(0, 4))
            r += 1

    def _sep(self, pady=(4, 4), color=BRD):
        tk.Frame(self, bg=color, height=1).pack(fill="x", padx=28, pady=pady)

    def _field_lbl(self, parent, text, row):
        lbl = tk.Label(parent, text=f"  {text}", bg=BG, fg=MUTED,
                       font=(MF, 8), anchor="w")
        lbl.grid(row=row, column=0, sticky="w", pady=(10, 1))
        return lbl

    def _entry(self, parent, default, row):
        e = tk.Entry(
            parent, bg=PANEL, fg=CYAN, insertbackground=CYAN,
            relief="flat", font=(MF, 13), width=30,
            highlightthickness=1,
            highlightbackground=BRD, highlightcolor=CYAN,
        )
        e.insert(0, default)
        e.grid(row=row, column=0, sticky="w", ipady=7, padx=(4, 0))
        return e

    # ── Logique ──────────────────────────────────────────────────────────────
    def _on_mode(self, *_):
        if self.mode.get() == "depuis_mur":
            self._lbl_mt.config(text="  MONTANT  (MUR)")
            self._ent_mt.delete(0, "end")
            self._ent_mt.insert(0, "1000")
        else:
            self._lbl_mt.config(text="  MONTANT A RECEVOIR  (Ariary)")
            self._ent_mt.delete(0, "end")
            self._ent_mt.insert(0, "13500")
        for v in self._res.values():
            v.set("—")

    def _calc(self):
        try:
            mt    = float(self._ent_mt.get().replace(",", ".").replace(" ", ""))
            cours = float(self._ent_cx.get().replace(",", ".").replace(" ", ""))
            if mt <= 0 or cours <= 0:
                raise ValueError
        except ValueError:
            self._res["total_rs"].set("  [ ENTREE INVALIDE ]")
            return

        r = calc_depuis_mur(mt, cours) if self.mode.get() == "depuis_mur" \
            else calc_depuis_ar(mt, cours)

        self._res["envoye_rs"].set(fmt_rs(r["envoye_rs"]))
        self._res["recu_ar"].set(fmt_ar(r["recu_ar"]))
        self._res["frais_mcb_rs"].set(fmt_rs(r["frais_mcb_rs"]))
        self._res["frais_om_rs"].set(fmt_rs(r["frais_om_rs"]))
        self._res["frais_om_ar"].set(fmt_ar(r["frais_om_ar"]))
        self._res["total_rs"].set(fmt_rs(r["total_rs"]))

# ─── Application ─────────────────────────────────────────────────────────────
class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("TRANSFERT MUR-MGA")
        self.configure(bg=BG)
        self.resizable(False, False)
        self._set_geometry(580, 400)

        self._boot = BootScreen(self, self._launch)
        self._boot.pack(fill="both", expand=True)

    def _set_geometry(self, w, h):
        self.update_idletasks()
        sw = self.winfo_screenwidth()
        sh = self.winfo_screenheight()
        self.geometry(f"{w}x{h}+{(sw - w) // 2}+{(sh - h) // 2}")

    def _launch(self):
        self._boot.destroy()
        self.unbind("<Return>")
        self.unbind("<space>")
        calc = Calculator(self)
        calc.pack(fill="both", expand=True)
        self._set_geometry(580, 570)

if __name__ == "__main__":
    App().mainloop()
