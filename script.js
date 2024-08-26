const addBookBtn = document.getElementById('add-book');
const inputForm = document.getElementById('input-form');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const checkBox = document.getElementById('checkbox')
const submitBtn = document.getElementById('submit')
const favDialog = document.getElementById("favDialog");


function displayForm() {
    favDialog.showModal();
}

// ensures only numbers can be entered for pages value 
pages.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});


function inputBook(event) {
    event.preventDefault();
    console.log("inputBook function called"); 

    const inputTitle = title.value.trim();
    const inputAuthor = author.value.trim();
    const inputPages = pages.value.trim(); 
    

    if (inputTitle && inputAuthor && inputPages) {

            const cardGrid = document.getElementById('book-grid');
                

            const card = document.createElement('div');
            const cardBody = document.createElement('div');
            const cardTitle = document.createElement('h5');
            const cardAuthor = document.createElement('h5');
            const cardPages = document.createElement('h5');
            const hasReadBtn = document.createElement('button');
            const removeBtn = document.createElement('button');

        cardTitle.textContent = `${inputTitle} `;
        cardTitle.classList.add('card-title');

        cardAuthor.textContent = `${inputAuthor} `;
        cardAuthor.classList.add('card-title');

        cardPages.textContent = `${inputPages} `; 
        cardPages.classList.add('card-title');
        

            if (checkBox.checked) {
                hasReadBtn.classList.add('btn', 'btn-success', 'd-block', 'card-btn');
                hasReadBtn.textContent = 'Read';
            }
            else {
                hasReadBtn.classList.add('btn', 'btn-danger', 'd-block', 'card-btn');
                hasReadBtn.textContent = 'Not read';
            }
            hasReadBtn.style.width = '100%';

            removeBtn.classList.add('btn', 'btn-primary', 'd-block', 'card-btn');
            removeBtn.style.width = '100%';
            removeBtn.textContent = 'Remove';
        

        card.classList.add('card');
        card.style.width = '25rem';

        cardBody.classList.add('cards');
        cardBody.append(cardTitle, cardAuthor, cardPages, hasReadBtn, removeBtn);
        card.append(cardBody);

           
        cardGrid.append(card);

        
        // reset the form fields
        title.value = '';
        author.value = '';
        pages.value = '';
        checkBox.checked = false;

        // to close modal after form submitted 
        favDialog.close()


    // toggle buttton for user read or not read 
    hasReadBtn.addEventListener('click', () => {
    if (hasReadBtn.textContent === 'Read') {
        hasReadBtn.style.backgroundColor = 'red';
        hasReadBtn.textContent = 'Not Read';
    } else {
        hasReadBtn.style.backgroundColor = 'green';
        hasReadBtn.textContent = 'Read';
    }
    });
     
        // remove button event listener 
        removeBtn.addEventListener('click', () => {
            card.remove();
        })
        
    }

}
