var button = document.getElementById("counter");
var counter = 0;
button.onclick = function (){
    
        
        
        
        
        counter = counter + 1;
        var span = document.getElementById("count");
        span.innerHTML = counter.toString();
};


var nameInput = doucument.getElementById("name");
var name1 = nameInput.value;
var submit = document.getElementById("submit");
submit.onclick = function(){
    
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list == '<li>' + name1[i] + '</li>';
    }
    var ul = document.getElementById('name-list');
    ul.innterHTML = list;
    
};