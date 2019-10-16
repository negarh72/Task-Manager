window.onload = init;

function init() {
    var res = null;
    document.getElementById('status').addEventListener('click', function() {
        var c = document.getElementsByClassName('c');
        for (var i = 0; i < c.length; i++) {
            if (res[i].status == "DONE") {
                c[i].parentElement.classList.add('green');
            } else if (res[i].status == "TO DO") {
                c[i].parentElement.classList.add('red');
            } else if (res[i].status == "In Progress") {
                c[i].parentElement.classList.add('yellow');
            }
        }
    });
    document.getElementById('delete').addEventListener('click', function() {
        var c = document.getElementsByClassName('c');
        for (var i = 0; i < c.length; i++) {

            if (c[i].checked) {
                console.log(res);
                console.log('c[i].parentElement  ' + c[i].parentElement.classList);
                console.log("c[i].getAttribute('data-id')  " + c[i].getAttribute('data-id'));
                c[i].parentElement.classList.add('hide');

                // c[i].parentElement.style.display = 'none';
                // res.splice(i, 1);
                // console.log('c.lenght = ' + c.length)
                // c.length = c.length - 1;

                // console.log(res[i].title);
                // var deletedItem = res.splice(i, 1);
                // console.log(res);
                // var deletedItem = res.splice(i, 1);
                // c[i].parentElement.style.display = 'none'
                // console.log(res);
                // console.log(deletedItem);

            }
        }
        // build(res, 'output');
    });
    loadJSON('GET', 'https://api.myjson.com/bins/11xowi', function(res) {
        // console.log(res);
        // console.log(Handlebars);
        build(res, 'output');
    });

    function build(r, id) {
        var source = document.getElementById('task-template').innerHTML;
        var template = Handlebars.compile(source);
        var html = template(r);
        document.getElementById(id).innerHTML = html;


    }

    function loadJSON(m, u, callback) {
        var xHR = new XMLHttpRequest;
        xHR.open(m, u, true);
        xHR.onreadystatechange = function() {
            if (this.status == 200 && this.readyState == 4) {
                res = JSON.parse(this.response);
                console.log(res);
                callback(res);
            }
        }
        xHR.send();
    }
}



// var obj = {
//     hi: function(m){
//         console.log(m);
//         console.log(this);
//     }
// }

// obj.hi(this);