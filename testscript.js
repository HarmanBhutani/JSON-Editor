  // create the editor
  var container = document.getElementById('jsoneditor');
  var options = {};
  var editor = new JSONEditor(container, options);

    var container = document.getElementById('jsoneditorharman');
  var optionss = {};
  var editorr = new JSONEditor(container, options);



  // set json
  document.getElementById('setJSON').onclick = function () {

    // var json= JSON.parse(document.getElementById('jsoneditor').value);

    var json = document.getElementById('jsoneditor').value;
    //json = json.replace(/\\"/g, '"');
    // editor.set(json);
    json =JSON.parse(JSON.parse(JSON.stringify(json)));
   
      editorr.set(json);
      var json = editor.get();
  };

  // get json
  document.getElementById('getJSON').onclick = function () {
    
    alert(JSON.stringify(json));
  };