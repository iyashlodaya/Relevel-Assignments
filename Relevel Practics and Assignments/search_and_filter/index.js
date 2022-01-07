// search case in-sensitive function
function searchItem(event) {
    event.preventDefault();
    let searchText = document.getElementById('searchInput').value;
    let list = document.getElementsByClassName('card-title');
    let filter = searchText.toUpperCase();

    for (let i = 0; i < list.length; i++) {
        if(list[i].innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            list[i].parentElement.parentElement.style.display = "";
        }
        else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}

// search case sensitive function
function searchCaseSensitve(event) {
    event.preventDefault();
    let searchText = document.getElementById('searchInput').value;
    let list = document.getElementsByClassName('card-title');

    for (let i = 0; i < list.length; i++) {
        if(list[i].innerHTML.indexOf(searchText) > -1)
        {
            list[i].parentElement.parentElement.style.display = "";
        }
        else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}

function searchByStartLetter() {
    let list = document.getElementsByClassName(`card-title`);
    let searchText = document.getElementById('startsWithInput').value;

    for(let i=0; i< list.length; i++) {
        if(list[i].innerHTML.startsWith(searchText)) {
            list[i].parentElement.parentElement.style.display = "";
        }
        else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}
function searchByEndLetter() {
    let list = document.getElementsByClassName(`card-title`);
    let searchText = document.getElementById('endsWithInput').value;

    for(let i=0; i< list.length; i++) {
        if(list[i].innerHTML.endsWith(searchText)) {
            list[i].parentElement.parentElement.style.display = "";
        }
        else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}
function searchByIncludedLetter() {
    let list = document.getElementsByClassName(`card-title`);
    let searchText = document.getElementById('includesInput').value;

    for(let i=0; i< list.length; i++) {
        if(list[i].innerHTML.includes(searchText)) {
            list[i].parentElement.parentElement.style.display = "";
        }
        else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}