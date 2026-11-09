// ====== MARK TEMPLATES MODULE ======
// Default preloaded templates and user custom template management

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MarkTemplates = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const DEFAULT_TEMPLATES = [
    {
      id: 'readme-github',
      title: 'README GitHub',
      category: 'github',
      categoryLabel: 'GitHub & Software',
      icon: '🚀',
      badge: 'Ufficiale',
      description: 'Template completo e professionale per progetti open source su GitHub con badge, quick start, architettura e licenza.',
      suggestedFilename: 'README.md',
      content: `# 🚀 Nome del Progetto

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()
[![Platform: Linux | macOS | Windows](https://img.shields.io/badge/platform-Linux%20%7C%20macOS%20%7C%20Windows-lightgrey.svg)]()

> Una breve descrizione o tagline accattivante del progetto che spiega chiaramente a cosa serve e perché è utile.

---

## 📌 Indice dei Contenuti
- [Panoramica](#-panoramica)
- [Funzionalità Chiave](#-funzionalità-chiave)
- [Requisiti di Sistema](#-requisiti-di-sistema)
- [Installazione Rapida](#-installazione-rapida)
- [Utilizzo ed Esempi](#-utilizzo-ed-esempi)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Contribuire](#-contribuire)
- [Licenza](#-licenza)

---

## 📖 Panoramica
Descrivi in dettaglio il contesto del progetto, gli obiettivi che persegue e i problemi specifici che risolve.

> [!NOTE]
> Evidenzia qui eventuali note architetturali, avvisi di compatibilità o raccomandazioni preliminari.

---

## ✨ Funzionalità Chiave
- ⚡ **Prestazioni elevate**: ottimizzato per latenza minima e consumo ridotto di risorse.
- 🎨 **Interfaccia moderna**: design pulito, responsive e accessibile.
- 🔒 **Privacy by design**: nessun tracciamento non richiesto né telemetria invadente.
- 🛠 **Estensibile**: architettura modulare predisposta per plugin e personalizzazioni.

---

## 🛠 Requisiti di Sistema
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 o **yarn**
- **Git** installato nel sistema

---

## 📦 Installazione Rapida

Clona la repository ed installa le dipendenze:

\`\`\`bash
# 1. Clona la repository
git clone https://github.com/username/nome-progetto.git

# 2. Entra nella cartella di lavoro
cd nome-progetto

# 3. Installa le dipendenze di pacchetto
npm install
\`\`\`

---

## 🚀 Utilizzo ed Esempi

Avvia l'applicazione in modalità sviluppo:

\`\`\`bash
npm start
\`\`\`

Per generare i binari di produzione:

\`\`\`bash
npm run build
\`\`\`

Esempio di snippet di codice:

\`\`\`javascript
import { AppRunner } from './src/index.js';

const app = new AppRunner({
  port: 3000,
  environment: 'production'
});

await app.start();
console.log('Server operativo!');
\`\`\`

---

## 📐 Struttura del Progetto
\`\`\`text
├── src/
│   ├── components/       # Componenti UI
│   ├── core/             # Logica di business principale
│   ├── utils/            # Funzioni ausiliarie e helper
│   └── index.js          # Entry point dell'applicazione
├── docs/                 # Documentazione dettagliata
├── tests/                # Suite di test unitari e di integrazione
├── package.json
└── README.md
\`\`\`

---

## 🤝 Contribuire
I contributi della community sono sempre benvenuti!
1. Fai il **Fork** della repository.
2. Crea un feature branch dedicato (\`git checkout -b feature/nuova-funzionalita\`).
3. Effettua il commit delle modifiche (\`git commit -m 'Aggiunta nuova funzionalita'\`).
4. Invia le modifiche sul tuo branch (\`git push origin feature/nuova-funzionalita\`).
5. Apri una **Pull Request** dettagliata.

---

## 📄 Licenza
Rilasciato sotto licenza [MIT](LICENSE). Consultare il file per maggiori informazioni.
`
    },
    {
      id: 'university-report',
      title: 'Report Universitario',
      category: 'academic',
      categoryLabel: 'Università & Report',
      icon: '🎓',
      badge: 'Ufficiale',
      description: 'Struttura accademica completa per relazioni di laboratorio, tesine ed esami universitari con formule KaTeX, tabelle e bibliografia.',
      suggestedFilename: 'report-accademico.md',
      content: `# 🏛 Università degli Studi
### Dipartimento di Ingegneria e Scienze Informatiche
**Corso di Laurea in Ingegneria Informatica**

---

# Titolo della Relazione Accademica
### Sottotitolo, Progetto di Corso o Laboratorio Sperimentale

**Candidato:** Mario Rossi (Matricola: 0001234567)  
**Insegnamento:** Sistemi Distribuiti e Architetture Software  
**Docente:** Prof.ssa Maria Bianchi  
**Anno Accademico:** 2025/2026 — **Data di consegna:** 15 Novembre 2025  

---

## 📑 Sommario (Abstract)
Il presente documento descrive la progettazione, la formalizzazione teorica e l'analisi empirica del sistema realizzato. Viene introdotto il problema dell'ottimizzazione dell'allocazione delle risorse, supportato da una formulazione analitica rigorosa e da una campagna di misurazioni comparative. I risultati sperimentali mostrano una convergenza stabile e un incremento prestazionale del 34% rispetto al metodo convenzionale.

---

## 1. Introduzione e Obiettivi
La gestione dinamica dei flussi computazionali rappresenta una sfida critica nelle architetture odierne. I principali traguardi perseguiti in questo studio sono:
1. **Formalizzazione analitica** del comportamento dinamico dei carichi.
2. **Realizzazione del prototipo** software modulare.
3. **Validazione empirica** tramite benchmarking su carichi sintetici e realistici.

> [!NOTE]
> Tutti i benchmark sono stati condotti in ambiente isolato a temperatura controllata per minimizzare interferenze termiche sul governor della CPU.

---

## 2. Modello Teorico e Formulazione Matematica
Il bilanciamento del sistema nel dominio continuo è regolato dalla seguente equazione differenziale di stato:

$$
\\mathcal{L}(t) = \\sum_{i=1}^{N} w_i \\cdot \\frac{\\partial \\Phi_i}{\\partial t} + \\lambda \\int_0^t \\mathcal{K}(t - \\tau) d\\tau
$$

Dove:
- $w_i \\in \\mathbb{R}^+$ rappresenta il coefficiente di carico associato al nodo $i$-esimo.
- $\\Phi_i$ definisce il potenziale istantaneo di saturazione.
- $\\lambda$ è il parametro di retroazione controllata.

La convergenza asintotica della traiettoria è garantita dal criterio di stabilità:

$$
\\lim_{t \\to \\infty} \\mathbb{E}\\left[ \\|\\mathbf{x}(t) - \\mathbf{x}^*\\|^2 \\right] = 0
$$

---

## 3. Metodologia Sperimentale
I test sono stati eseguiti su un cluster eterogeneo di prova. I parametri di configurazione adottati sono riassunti nella tabella sottostante:

| Parametro di Misura | Valore Nominale | Intervallo Testato | Unità |
| :--- | :--- | :--- | :--- |
| Nodi operativi attivi | 16 | 4 – 64 | nodi |
| Dimensione buffer di coda | 1024 | 256 – 4096 | KB |
| Timeout di risposta ($T_{out}$) | 50 | 10 – 200 | ms |
| Frequenza di campionamento | 100 | 20 – 500 | Hz |

---

## 4. Implementazione Algoritmica
Di seguito si riporta il core dell'algoritmo sviluppato in Python per l'elaborazione dei flussi:

\`\`\`python
import numpy as np

def estimate_system_latency(nodes: int, buffer_kb: int, alpha: float = 0.05) -> float:
    """
    Stima la latenza attesa del cluster secondo il modello differenziale.
    """
    base_latency_ms = 1.25
    network_overhead = np.log2(nodes) * 0.40
    queue_delay = (buffer_kb / 1024.0) * alpha
    
    total_latency = base_latency_ms + network_overhead + queue_delay
    return float(total_latency)

# Test con 16 nodi e 2048 KB di buffer
result = estimate_system_latency(nodes=16, buffer_kb=2048)
print(f"Latenza teorica calcolata: {result:.3f} ms")
\`\`\`

---

## 5. Analisi dei Risultati
I dati raccolti evidenziano una piena rispondenza con le previsioni analitiche:
- **Throughput:** Aumento del **34.2%** nella regione di saturazione.
- **Latenza ($P_{99}$):** Mantenuta al di sotto di **15 ms** su 10.000 iterazioni.
- **Tolleranza ai guasti:** Riconfigurazione autonoma entro **120 ms** dal failure simulato di un nodo.

---

## 6. Conclusioni
Lo studio ha convalidato la solidità della formulazione proposta. L'architettura sviluppata si è dimostrata robusta, efficiente e facilmente scalabile verso scenari distribuiti su larga scala.

---

## 📚 Riferimenti Bibliografici
1. Tanenbaum, A. S., & Van Steen, M. (2017). *Distributed Systems: Principles and Paradigms*. Pearson.
2. Shannon, C. E. (1948). *A Mathematical Theory of Communication*. Bell System Technical Journal, 27(3), 379–423.
3. Knuth, D. E. (1997). *The Art of Computer Programming, Volume 1: Fundamental Algorithms*. Addison-Wesley.
`
    },
    {
      id: 'study-notes',
      title: 'Appunti di Studio',
      category: 'notes',
      categoryLabel: 'Appunti & Studio',
      icon: '📝',
      badge: 'Ufficiale',
      description: 'Template per prendere appunti efficaci durante le lezioni o sessioni di studio con box di attenzione, formule, esempi pratici e checklist di ripasso.',
      suggestedFilename: 'appunti-lezione.md',
      content: `# 📝 Appunti di Lezione: [Nome Insegnamento]

**Data della Lezione:** 10 Novembre 2026  
**Docente:** Prof. [Nome Cognome]  
**Argomento:** [Titolo dell'Argomento o Capitolo]  
**Riferimenti bibliografici:** Capitoli 3 & 4 del libro di testo  

---

## 🎯 Obiettivi della Lezione
- [ ] Comprendere il principio fondamentale dell'argomento.
- [ ] Saper dimostrare il teorema cardine e i suoi corollari.
- [ ] Risolvere autonomamente gli esercizi applicativi tipici d'esame.

---

## 💡 Concetti Chiave & Definizioni

> [!NOTE]
> **Definizione Principale:**  
> Inserisci qui la definizione fondamentale enunciata a lezione. Utilizza grassetto e formule per evidenziare le variabili critiche.

- **Concetto A:** Spiegazione sintetica ed efficace del primo principio.
- **Concetto B:** Condizioni di validità e limiti operativi rispetto al caso generale.
- **Proprietà notevole:** Quando vale l'uguaglianza e quando invece decade.

---

## 🔍 Trattazione Dettagliata

### 1. Fondamenti e Schema Logico
La dimostrazione procede secondo tre passaggi logici consequenziali:
1. Definizione dello spazio delle soluzioni ammissibili.
2. Applicazione della trasformata integrale nello spazio duale.
3. Verifica della convergenza uniforme.

### 2. Formulazione Matematica
La relazione fondamentale da ricordare per la prova scritta è la seguente:

$$
F(\\omega) = \\int_{-\\infty}^{+\\infty} f(t) e^{-j \\omega t} dt
$$

Proprietà essenziali:
- **Linearità:** $\\mathcal{F}\\{\\alpha f(t) + \\beta g(t)\\} = \\alpha F(\\omega) + \\beta G(\\omega)$
- **Traslazione temporale:** $\\mathcal{F}\\{f(t - t_0)\\} = e^{-j \\omega t_0} F(\\omega)$

---

## ⚠️ Attenzione: Errori Tipici d'Esame
> [!WARNING]
> Ricorda di verificare sempre l'integrabilità assoluta prima di applicare il teorema di inversione! Il professore penalizza severamente la mancata verifica di questa ipotesi.

---

## 🧪 Esempi Pratici & Domande d'Esame

**Domanda d'esame frequente:**  
*Come varia lo spettro del segnale se la durata temporale dell'impulso viene dimezzata?*

**Risposta modello:**  
In virtù del principio di indeterminazione tempo-banda, il dimezzamento della durata temporale determina un **raddoppio della larghezza di banda** nello spazio delle frequenze con ampiezza riscalata di un fattore pari a $1/2$.

---

## 📌 Mappa di Sintesi Rapida
\`\`\`text
Problema Principale
  ├── Ipotesi 1 ──> Risultato A (Caso canonico)
  └── Ipotesi 2 ──> Risultato B (Caso limite / Singolarità)
\`\`\`

---

## ✅ Checklist di Studio & Da Fare
- [ ] Rileggere gli appunti ed integrare con le slide della lezione.
- [ ] Rifare l'esercizio #3 senza consultare lo svolgimento.
- [ ] Chiedere chiarimenti al docente durante il ricevimento sul corollario 2.
- [ ] Realizzare la scheda riassuntiva delle formule per il ripasso finale.
`
    }
  ];

  const STORAGE_KEY = 'mark.customTemplates';

  function getCustomTemplates() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('[MarkTemplates] Error reading custom templates:', e);
      return [];
    }
  }

  function saveCustomTemplate({ id, title, category, description, content }) {
    if (!title || !title.trim()) {
      throw new Error('Il titolo del template è obbligatorio');
    }
    const templates = getCustomTemplates();
    const templateId = id || ('custom-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5));
    
    const catMap = {
      academic: 'Università & Report',
      notes: 'Appunti & Studio',
      github: 'GitHub & Software',
      personal: 'Personale',
      other: 'Altro'
    };

    const newTemplate = {
      id: templateId,
      title: title.trim(),
      category: category || 'personal',
      categoryLabel: catMap[category] || 'Personalizzato',
      icon: category === 'academic' ? '🎓' : (category === 'github' ? '🚀' : (category === 'notes' ? '📝' : '⭐')),
      badge: 'Mio Template',
      description: (description || '').trim() || 'Template personalizzato creato dall\'utente.',
      suggestedFilename: (title.toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-') || 'template') + '.md',
      content: content || '',
      isCustom: true,
      updatedAt: Date.now()
    };

    const existingIndex = templates.findIndex(t => t.id === templateId);
    if (existingIndex >= 0) {
      templates[existingIndex] = newTemplate;
    } else {
      templates.unshift(newTemplate);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
    return newTemplate;
  }

  function deleteCustomTemplate(id) {
    if (!id) return false;
    let templates = getCustomTemplates();
    const beforeLen = templates.length;
    templates = templates.filter(t => t.id !== id);
    if (templates.length !== beforeLen) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
      return true;
    }
    return false;
  }

  function getAllTemplates() {
    const custom = getCustomTemplates();
    return [...DEFAULT_TEMPLATES, ...custom];
  }

  function getTemplateById(id) {
    if (!id) return null;
    return getAllTemplates().find(t => t.id === id) || null;
  }

  return {
    DEFAULT_TEMPLATES,
    getCustomTemplates,
    saveCustomTemplate,
    deleteCustomTemplate,
    getAllTemplates,
    getTemplateById
  };
});
