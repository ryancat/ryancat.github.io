--- 
layout: demo
title: JS Inspector
ogDescription: Simple Javascript inspector
ogImage: /dist/jsinspector.png
ogTitle: JS Inspector
---

<style>
  #jsinspectorApp {
    margin: 20px;
  }

  #editor {
    width: 100%;
    min-width: 500px;
    height: 500px;
    max-height: 800px;
    border: 1px solid #c3c3c3;
    outline: none;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  #inspectBtn {
    width: 150px;
    position: relative;
    left: 50%;
    line-height: 30px;
    font-family: monospace;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transform: translateX(-50%);
    margin-bottom: 20px;
  }

  .description {
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    font-family: monospace;
    font-size: 12px;
  }

  .result {
    color: green;
    border: 1px solid green;
    padding: 5px;
  }

  .result.error {
    color: red;
    border: 1px solid red;
  }
</style>

<div id="jsinspectorApp">
  <div id="editor"></div>
  <div class="description">
    <span>Please open your browser's dev tools, as well as active breakpoints</span>
  </div>
  <button id="inspectBtn">Inspect</button>
  <div id="evalResult" class="description"></div>
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
<script type="text/javascript">
  // Config ace editor
  var editor = ace.edit('editor');
  editor.session.setMode("ace/mode/javascript");
  editor.setTheme("ace/theme/tomorrow");

  // Retrieve information from localStorage, if any
  var content = localStorage.getItem('jsinspectorContent');
  if (content) {
    editor.setValue(content);
  }

  var result = document.getElementById('evalResult');

  // Store changes into localStorage
  editor.session.on('change', function () {
    result.innerHTML = '';
    localStorage.setItem('jsinspectorContent', editor.getValue());
  });

  // Config inspect behavior. 
  // This will trigger browser inspector.
  var inspectBtn = document.getElementById('inspectBtn');
  inspectBtn.addEventListener('click', function () {
    var content = editor.getValue(),
        resultValue;
    // TODO: Avoid nested eval
    // TODO: Undo and Redo

    // Add breakpoint
    content = '// Start debug your javascript...\ndebugger;\n\n' + content;

    // It's ok to use eval as this will be a static page
    try {
      resultValue = eval(content);
    } catch (e) {
      console.log('Your javascript code has error(s)');
      result.innerHTML = '<span class="result error">Your javascript code has error(s)</span>';
    }

    if (result.innerHTML === '') {
      result.innerHTML = '<span class="result">Result: ' + resultValue + '</span>';
    }
  });
</script>