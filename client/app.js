(function() {
  var submit = document.getElementById('submit-upload'),
      fileInput = document.getElementById('file-input'),
      resultDisplay = document.getElementById('result');
 
  submit.addEventListener('click', function() {
    if (fileInput.files.length > 0) {  // Make sure a file was chosen
      uploadFile(fileInput.files[0]); // Grab the first file as it is the only one
    }
  });
 
  function uploadFile(file) {
    var http = new XMLHttpRequest(),
        formData = new FormData(), // Note: This won't work on older browsers
        url = 'upload'; // Our endpoint address
 
    formData.append('data', file); // Remember we defined 'data' as the fieldname in multer
    http.open('POST', url, true);
    http.send(formData);
    http.onload = function() {
      // Response is available here as this.responseText
      resultDisplay.innerHTML = this.responseText;
    };
  }
  }());