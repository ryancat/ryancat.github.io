--- 
layout: demo
title: JS Inspector
ogDescription: Simple Javascript inspector
ogImage: /dist/jsinspector.png
ogTitle: JS Inspector
---

<link rel="stylesheet" href="/dist/jsinspector.css">

<div id="jsinspectorApp">
  <div id="editors">
    <div class="editorTabs tabs"></div>
  </div>
  <div class="toolbar">
    <div class="toobarItem toolbarBreakpoint">
      <button class="toolbarBreakpointBtn toDisable secondary">Disable Breakpoints</button>
      <button class="toolbarBreakpointBtn toEnable secondary">Enable Breakpoints</button>
    </div>
  </div>
  <div class="toolbox">
    <ul class="toolboxBreakpointLines"></ul>
  </div>
  <div class="description">
    <span>Please open your browser's dev tools, as well as active breakpoints</span>
  </div>
  <div class="mainInteraction">
    <button id="inspectBtn" class="primary">Inspect</button>
    <button id="perfBtn" class="primary">Perf Test (3s)</button>
  </div>
  <div id="console" class="description">
    <div class="toolBar">
      <button class="secondary toClear">Clear</button>
      <div class="editorTabs tabs"></div>
    </div>
    <div class="content"></div>
  </div>
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
<script type="text/javascript" src="/dist/jsinspector.js"></script>