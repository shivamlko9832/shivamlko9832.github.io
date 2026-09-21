---
# the default layout is 'page'
icon: fas fa-info-circle
order: 5
toc: false
---

<p class="lead-note">
  I'm Shivam — a cloud and AI engineer in Lucknow, India. I build agent systems that
  have to survive contact with production, and I write down what actually held up.
</p>

Most of my day is spent where language models meet real infrastructure: Azure AI Foundry,
the Microsoft Agent Framework, MCP servers, container platforms, and the databases and
ticketing systems an agent is only useful if it can reach. This blog is the notebook —
architecture decisions, integration patterns, failures worth documenting, and research
I wanted to read but couldn't find.

## How I write

<div class="grid-cards">
  <div class="grid-card">
    <span class="grid-card-icon"><i class="fas fa-scale-balanced"></i></span>
    <h3>Claims kept separate</h3>
    <p>Vendor assertions are labelled as vendor assertions. Independent findings are labelled as independent. Where something isn't publicly documented, I say so.</p>
  </div>
  <div class="grid-card">
    <span class="grid-card-icon"><i class="fas fa-flask"></i></span>
    <h3>Tested, not summarised</h3>
    <p>Where I can run it, I run it — and the failure modes go in the write-up alongside the happy path.</p>
  </div>
  <div class="grid-card">
    <span class="grid-card-icon"><i class="fas fa-diagram-project"></i></span>
    <h3>Architecture first</h3>
    <p>Interfaces, boundaries and trade-offs before syntax. The interesting question is usually what a system refuses to do.</p>
  </div>
</div>

## What I work with

<ul class="chip-row">
  <li>Microsoft Azure</li>
  <li>Azure AI Foundry</li>
  <li>Microsoft Agent Framework</li>
  <li>Model Context Protocol</li>
  <li>Azure Container Apps</li>
  <li>Azure SQL</li>
  <li>Python</li>
  <li>Docker</li>
  <li>ServiceNow</li>
  <li>Structured outputs & evals</li>
</ul>

## Current focus

<ul class="stack-list">
  <li><strong>Agent architecture</strong> <span>Tool allow-listing, write authorization, and where the decision boundary belongs</span></li>
  <li><strong>MCP integrations</strong> <span>Hosted MCP servers over real systems of record, and the transport choices that break them</span></li>
  <li><strong>Model mechanics</strong> <span>KV cache behaviour, calibration, and the cost model underneath latency claims</span></li>
  <li><strong>Cloud plumbing</strong> <span>Identity, container platforms, quotas, and the unglamorous parts that decide whether a demo ships</span></li>
</ul>

<div class="cta-panel">
  <h3>Get in touch</h3>
  <p>
    I'm happy to talk about agent architecture, MCP integrations, or anything you think
    I've got wrong in a post — corrections are welcome and get credited.
  </p>
  <div class="hero-actions">
    <a class="hero-btn hero-btn--primary" href="https://www.linkedin.com/in/shivamlko9832/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-fw"></i> LinkedIn</a>
    <a class="hero-btn" href="https://github.com/shivamlko9832" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-fw"></i> GitHub</a>
    <a class="hero-btn" href="mailto:shivamlko9832@gmail.com"><i class="fas fa-envelope fa-fw"></i> Email</a>
    <a class="hero-btn" href="/feed.xml"><i class="fas fa-rss fa-fw"></i> RSS</a>
  </div>
</div>
