const searchInput = document.getElementById('searchInput');
const resultList = document.getElementById('lista-resultados');
const listItems = resultList.querySelectorAll('li');

searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase().trim();
    
    if (searchText === '') {
        resultList.style.display = 'none';
    } else {
        resultList.style.display = 'block';
        listItems.forEach(item => {
            const itemText = item.textContent.toLowerCase().trim();
            if (itemText.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

