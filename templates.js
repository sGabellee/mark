// ====== MARK TEMPLATES MODULE ======
// Built-in templates (no emojis, professional academic/engineering/open-source standards)
// and user custom templates with category management.

(function () {
const DEFAULT_CATEGORIES = [
  { id: 'academic', label: 'Academic & Reports' },
  { id: 'notes', label: 'Lecture & Study Notes' },
  { id: 'github', label: 'GitHub & Software' },
  { id: 'personal', label: 'Personal' },
  { id: 'other', label: 'Other' }
];

const DEFAULT_TEMPLATES = [
  {
    id: 'readme-github',
    title: 'GitHub README',
    category: 'github',
    categoryLabel: 'GitHub & Software',
    description: 'Standard template based on makeareadme.com for open-source projects with overview, badges, installation, usage, and contributing guidelines.',
    suggestedFilename: 'README.md',
    content: `# [Project Name]

A brief description of what this project does and who it's for.

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

## Visuals
Depending on what you are building, include screenshots, architecture diagrams, or an animated demo GIF here.

## Installation
Step-by-step instructions to set up the project and install all required dependencies:

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project-name.git

# Navigate into the project folder
cd project-name

# Install dependencies
npm install
\`\`\`

## Usage
Provide practical examples and common terminal commands or code snippets:

\`\`\`javascript
import { App } from './src/index.js';

const app = new App();
app.start();
\`\`\`

## Support
Explain where users and contributors can get help or report issues: open an issue or reach out to the project maintainers.

## Roadmap
Outline planned features and future release goals:
- [ ] Cross-platform support
- [ ] Performance optimizations
- [ ] Extended API integration

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please ensure to update or add tests as appropriate.

## Authors and Acknowledgment
Acknowledge contributors, original authors, libraries, or organizations that supported the project.

## License
[MIT](https://opensource.org/licenses/MIT)

## Project Status
State whether development is active, completed, in maintenance, or archived.
`
  },
  {
    id: 'university-report',
    title: 'Academic & Lab Report',
    category: 'academic',
    categoryLabel: 'Academic & Reports',
    description: 'Universal university and laboratory report structure featuring abstract, table of contents, methodology, experimental results, and references.',
    suggestedFilename: 'report_.md',
    content: `# [Course / Subject Name]
### Laboratory Report: [Report Title]

**Student:** [First Name Last Name]  
**Student ID:** [ID / Matricola]  
**Academic Year:** 2026/2027  
**Date:** [Submission Date]  

---

## Abstract
A concise summary of the laboratory activity: primary objectives, methodologies and toolchains used, key experimental findings, and final evaluation.

---

## Table of Contents
- [1. Introduction and Objectives](#1-introduction-and-objectives)
  - [1.1 Background and Requirements](#11-background-and-requirements)
  - [1.2 Toolchain and Environment](#12-toolchain-and-environment)
- [2. System Design and Implementation](#2-system-design-and-implementation)
  - [2.1 Theoretical Framework and Modeling](#21-theoretical-framework-and-modeling)
  - [2.2 Implementation Details](#22-implementation-details)
- [3. Experimental Measurements and Validation](#3-experimental-measurements-and-validation)
  - [3.1 Data Collection and Results](#31-data-collection-and-results)
  - [3.2 Discussion and Analysis](#32-discussion-and-analysis)
- [4. Conclusions and Future Work](#4-conclusions-and-future-work)
- [5. References](#5-references)

---

## 1. Introduction and Objectives
General context of the experiment or project, problem statement, and expected deliverables.

### 1.1 Background and Requirements
Overview of the target domain, fundamental specifications, and operational constraints:
- Target platform: [e.g. Hardware platform / Runtime environment]
- Operating parameters: [e.g. Clock frequency, voltage, memory limits]
- Functional requirements: [List key functional expectations]

### 1.2 Toolchain and Environment
Summary of development tools, compilers, simulators, and measurement equipment:
1. **Design / Modeling Tool:** [e.g. CAD, Simulator, Profiler]
2. **Build and Compilation Environment:** [e.g. GCC, LLVM, IDE]
3. **Instrumentation:** [e.g. Oscilloscope, Logic Analyzer, Benchmark Suite]

---

## 2. System Design and Implementation

### 2.1 Theoretical Framework and Modeling
Analytical formulation and mathematical derivation of operating parameters:

$$
f(x) = \\sum_{k=0}^{N-1} a_k \\cdot \\phi_k(x) + \\epsilon
$$

### 2.2 Implementation Details
Key logic flow, algorithms, and modular architectural design:

\`\`\`python
def process_samples(data_stream):
    """Filter raw input samples and compute aggregate metrics."""
    filtered = [x for x in data_stream if validate_sample(x)]
    return compute_summary(filtered)
\`\`\`

---

## 3. Experimental Measurements and Validation

### 3.1 Data Collection and Results
Comparison of theoretical expectations versus measured experimental data:

| Metric / Parameter | Nominal / Target | Measured Value | Relative Error (%) | Status |
| :--- | :--- | :--- | :--- | :--- |
| Metric A | 100.0 unit | 100.2 unit | +0.20% | Pass |
| Metric B | 50.0 ms | 49.8 ms | -0.40% | Pass |
| Metric C | 1.25 V | 1.24 V | -0.80% | Pass |

### 3.2 Discussion and Analysis
Interpretation of the experimental outcomes, observed deviations, edge cases encountered, and troubleshooting steps performed.

---

## 4. Conclusions and Future Work
Summary of project milestones achieved, alignment with initial objectives, and recommended future optimizations or investigations.

---

## 5. References
1. Author, A. (Year). *Title of Document, Manual, or Publication*, Publisher / Organization.
2. Official Reference Guide and Technical Specifications.
3. Laboratory Handouts and Lecture Notes.
`
  },
  {
    id: 'study-notes',
    title: 'Lecture & Study Notes',
    category: 'notes',
    categoryLabel: 'Lecture & Study Notes',
    description: 'Structured template for lecture and study notes with learning objectives, callout definitions, mathematical formulas, and a revision checklist.',
    suggestedFilename: 'app_.md',
    content: `# Lecture Notes: [Subject / Course Name]

**Lecture Date:** [Date]  
**Instructor:** Prof. [Name]  
**Topic:** [Topic or Chapter Title]  
**Textbook References:** [Chapters / Slide References]  

---

## 1. Learning Objectives
- [ ] Understand the core mechanism and theoretical principles.
- [ ] Be able to derive and apply the main formula in practice.
- [ ] Identify constraints, edge cases, and limits of validity.

---

## 2. Core Concepts and Definitions

> [!NOTE]
> **Key Principle:**  
> Provide the formal definition introduced during the lecture, emphasizing technical terms.

- **Concept A:** Definition, scope of application, and significance.
- **Concept B:** Comparison and contrast with related mechanisms.
- **Key Term:** Operational context and real-world significance.

---

## 3. Detailed Derivation and Analysis

### 3.1 Theoretical Foundations
1. Initial assumptions and boundary conditions.
2. Intermediate algebraic transformation or reasoning step.
3. Final resulting theorem and immediate corollaries.

### 3.2 Mathematical Formulation
Fundamental relation derived during class:

$$
F(\\omega) = \\int_{-\\infty}^{+\\infty} f(t) e^{-j \\omega t} dt
$$

Key properties:
- **Linearity:** $\\mathcal{F}\\{\\alpha f(t) + \\beta g(t)\\} = \\alpha F(\\omega) + \\beta G(\\omega)$
- **Duality:** Holds under absolute integrability and convergence criteria.

---

## 4. Practical Examples and Exam Questions

**Typical Exam Question:**  
*How does the system behavior change when the fundamental parameter varies?*

**Model Solution:**  
Step-by-step analytical explanation and asymptotic discussion.

---

## 5. Study and Review Checklist
- [ ] Review lecture notes alongside corresponding slides.
- [ ] Re-solve the class example without referring to the notes.
- [ ] Clarify any open questions during office hours.
- [ ] Construct a summary mindmap or cheat-sheet for this topic.
`
  }
];

const STORAGE_TEMPLATES_KEY = 'mark.customTemplates';
const STORAGE_CATEGORIES_KEY = 'mark.customTemplateCategories';

function getCategories() {
  try {
    if (typeof localStorage === 'undefined') return [...DEFAULT_CATEGORIES];
    const raw = localStorage.getItem(STORAGE_CATEGORIES_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    const combined = [...DEFAULT_CATEGORIES];
    if (Array.isArray(custom)) {
      custom.forEach(c => {
        if (c && c.id && !combined.some(x => x.id === c.id)) {
          combined.push(c);
        }
      });
    }
    return combined;
  } catch (e) {
    console.error('[MarkTemplates] Error reading categories:', e);
    return [...DEFAULT_CATEGORIES];
  }
}

function addCategory(label) {
  if (!label || !label.trim()) return null;
  const cleanLabel = label.trim();
  const id = 'cat-' + cleanLabel.toLowerCase().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-');
  
  const categories = getCategories();
  const existing = categories.find(c => c.id === id || c.label.toLowerCase() === cleanLabel.toLowerCase());
  if (existing) return existing;

  const newCat = { id, label: cleanLabel, isCustom: true };
  try {
    const raw = localStorage.getItem(STORAGE_CATEGORIES_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    custom.push(newCat);
    localStorage.setItem(STORAGE_CATEGORIES_KEY, JSON.stringify(custom));
  } catch (e) {
    console.error('[MarkTemplates] Error saving category:', e);
  }
  return newCat;
}

function getCustomTemplates() {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_TEMPLATES_KEY);
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
  
  const allCats = getCategories();
  const foundCat = allCats.find(c => c.id === category);
  const categoryLabel = foundCat ? foundCat.label : (category || 'Personale');

  const cleanFilename = (title.toLowerCase().replace(/[^a-z0-9_-]/g, '_').replace(/_+/g, '_') || 'template') + '.md';

  const newTemplate = {
    id: templateId,
    title: title.trim(),
    category: category || 'personal',
    categoryLabel: categoryLabel,
    badge: 'Mio Template',
    description: (description || '').trim() || 'Template personalizzato salvato dall\'utente.',
    suggestedFilename: cleanFilename,
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

  localStorage.setItem(STORAGE_TEMPLATES_KEY, JSON.stringify(templates));
  return newTemplate;
}

function updateCustomTemplate(id, data) {
  if (!id) return null;
  const templates = getCustomTemplates();
  const idx = templates.findIndex(t => t.id === id);
  if (idx < 0) return null;

  const existing = templates[idx];
  const allCats = getCategories();
  const catId = data.category || existing.category;
  const foundCat = allCats.find(c => c.id === catId);
  const categoryLabel = foundCat ? foundCat.label : (data.categoryLabel || existing.categoryLabel);

  const updated = {
    ...existing,
    title: data.title !== undefined ? data.title.trim() : existing.title,
    category: catId,
    categoryLabel: categoryLabel,
    description: data.description !== undefined ? data.description.trim() : existing.description,
    content: data.content !== undefined ? data.content : existing.content,
    updatedAt: Date.now()
  };

  templates[idx] = updated;
  localStorage.setItem(STORAGE_TEMPLATES_KEY, JSON.stringify(templates));
  return updated;
}

function deleteCustomTemplate(id) {
  if (!id) return false;
  let templates = getCustomTemplates();
  const beforeLen = templates.length;
  templates = templates.filter(t => t.id !== id);
  if (templates.length !== beforeLen) {
    localStorage.setItem(STORAGE_TEMPLATES_KEY, JSON.stringify(templates));
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

const MarkTemplates = {
  DEFAULT_CATEGORIES,
  DEFAULT_TEMPLATES,
  getCategories,
  addCategory,
  getCustomTemplates,
  saveCustomTemplate,
  updateCustomTemplate,
  deleteCustomTemplate,
  getAllTemplates,
  getTemplateById
};

// Guarantee availability in both Browser window and Node.js module context
if (typeof window !== 'undefined') {
  window.MarkTemplates = MarkTemplates;
}
if (typeof globalThis !== 'undefined') {
  globalThis.MarkTemplates = MarkTemplates;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MarkTemplates;
}
})();
