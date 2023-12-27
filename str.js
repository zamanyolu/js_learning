var init = function(){
    domStorageGet();
}

var domStorageGet = function(){
    //local storage
    try {
        document.body.removeChild(document.getElementById('local'));
    } catch (e) {

    }

    var lStrLength = localStorage.length;
    if(lStrLength >0){
        var table = document.createElement('table');
        table.id = "local";
        var caption = table.createCaption();
        caption.innerText = "localStorage";
        for (var i=0;i<lStrLength;i++){
            var key = localStorage.key(i);
            var data = localStorage.getItem(key);
            // var data = [localStorage.key(i),
            //     localStorage.getItem(localStorage.key(i))];

            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            row.appendChild(col1);
            row.appendChild(col2);
            table.appendChild(row);
            col1.innerText = key;
            col2.innerText = data;
            document.body.appendChild(table);
        }
    }

    //session storage
    try {
        document.body.removeChild(
            document.getElementById('session')
        );
    } catch (e) {
    }
    var sStrLength = sessionStorage.length;
    if (sStrLength>0){
        var table = document.createElement('table');
        table.id = 'session';
        var caption = table.createCaption();
        caption.innerText = 'sessionStorage';

        for(var i=0; i <sStrLength; i++){
            var data = [sessionStorage.key(i),
                sessionStorage.getItem(sessionStorage.key(i))];
            var row = document.createElement('tr');
            for (var j=0; j<2;j++){
                var col = document.createElement('td');
                col.innerText = data[j];
                row.appendChild(col);
            }

            table.appendChild(row);
            document.body.appendChild(table);
        }
    }
}

var lStrSet = function () {
    var key = document.querySelector('input:nth-of-type(1)').value;
    var value = document.querySelector('input:nth-of-type(2)').value;
    if(key=='' || value ==''){
        alert('alanları doldurunuz');
        return;
    }
    localStorage.setItem(key, value);
    domStorageGet();
}

var sStrSet = function (){
    var key = document.querySelector('input:nth-of-type(1)').value;
    var value = document.querySelector('input:nth-of-type(2)').value;
    if(key=='' || value==''){
        alert('alanları doldurunuz');
        return;
    }
    sessionStorage.setItem(key, value);
    domStorageGet();
}

