---
title: Work
icon: fas fa-cubes
order: 4
toc: false
---

<p class="lead-note">
  A short account of what I've built recently — described at the architecture level.
  Client and employer specifics are deliberately left out.
</p>

## Selected builds

<div class="grid-cards">
  <div class="grid-card">
    <span class="grid-card-icon"><i class="fas fa-headset"></i></span>
    <h3>ServiceNow incident agent</h3>
    <p>A fully hosted agent on the Microsoft Agent Framework and Azure AI Foundry, talking to ServiceNow through an MCP server on Azure Container Apps. Seven allow-listed tools, write authorization enforced at the prompt layer, and a multi-tier business-criticality framework behind the triage logic.</p>
  </div>
  <div class="grid-card">
    <span class="grid-card-icon"><i class="fas fa-database"></i></span>
    <h3>MCP server over Azure SQL</h3>
    <p>A customer self-service platform for utility accounts, wired to Azure SQL through a custom MCP server. Included an evaluation of Azure Data API Builder as an MCP engine and a full T-SQL rewrite after a dialect mismatch surfaced in testing.</p>
  </div>
  <div class="grid-card">
    <span class="grid-card-icon"><i class="fas fa-shield-halved"></i></span>
    <h3>Agent review & hardening</h3>
    <p>Reviews of multi-agent demos and reference implementations — transport and registration bugs, container build paths, secret-leak paths through <code>.dockerignore</code>, and the quota limits that quietly stop a deployment.</p>
  </div>
</div>

## Recurring problems I enjoy

<ul class="stack-list">
  <li><strong>Making tools safe to expose</strong> <span>Allow-lists, authorization layers, and reversible actions</span></li>
  <li><strong>Getting transports right</strong> <span>stdio vs. HTTP, registration semantics, and why the agent "sees" nothing</span></li>
  <li><strong>Decision boundaries</strong> <span>What the model decides, what the code decides, and what neither should</span></li>
  <li><strong>Evidence over claims</strong> <span>Benchmarks, calibration, and the difference between fast and correct</span></li>
</ul>

<div class="cta-panel">
  <h3>Want the long version?</h3>
  <p>The write-ups go into the architecture, the bugs, and the parts that didn't work.</p>
  <div class="hero-actions">
    <a class="hero-btn hero-btn--primary" href="/">Read the posts</a>
    <a class="hero-btn" href="/archives/">Browse the archive</a>
  </div>
</div>
