document.getElementById('note-form').addEventListener('submit', function(e) {
    
    e.preventDefault();


    var noteInput = document.getElementById('note-input');
    var note = noteInput.value;


    var noteItem = document.createElement('li');
    noteItem.className = 'note-item';
    noteItem.textContent = note;

    
    document.getElementById('note-list').appendChild(noteItem);


    noteInput.value = '';
});
