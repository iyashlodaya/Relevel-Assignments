function searchItem(event) {
    event.preventDefault()
    let searchText = document.getElementById('searchInput').value;
    let list = document.getElementsByClassName('card-title');
    let filter = searchText.toUpperCase();

    for (i = 0; i < list.length; i++) {
        if(list[i].innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            list[i].parentElement.parentElement.style.display = ""
        }
        else {
            list[i].parentElement.parentElement.style.display = "none"
        }
    }
}