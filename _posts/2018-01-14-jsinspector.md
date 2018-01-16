--- 
layout: demo
title: JS Inspector
ogDescription: Simple Javascript inspector
ogImage: /dist/jsinspector.png
ogTitle: JS Inspector
---

<link rel="stylesheet" href="/dist/jsinspector.css">

<div id="jsinspectorApp">
  <div id="editor"></div>
  <div class="toolbar">
    <div class="toobarItem toolbarBreakpoint">
      <button class="toolbarBreakpointBtn toDisable">Disable Breakpoints</button>
      <button class="toolbarBreakpointBtn toEnable">Enable Breakpoints</button>
    </div>
  </div>
  <div class="toolbox">
    <ul class="toolboxBreakpointLines"></ul>
  </div>
  <div class="description">
    <span>Please open your browser's dev tools, as well as active breakpoints</span>
  </div>
  <button id="inspectBtn">Inspect</button>
  <div id="evalResult" class="description"></div>
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
<script type="text/javascript" src="/dist/jsinspector.js"></script>