let html = '';
const vacancyList = document.querySelector('.vacancy-list');

VACANCYCARD.forEach((vacancy) => {
  
            html +=`
            <tr>
            <td class="vacancy-item">
            <div class="promo-img" style="background-image: url(${vacancy.promoImg});"></div>
            <div class="content">
                <div>
                    <div class="status-labels">
                    <span>${vacancy.status}</span>
                    </div>
                        <div class="info">
                        <div class="vacancy-name"><h3>${vacancy.name}</h3><div class="logo" style="background-image: url(${vacancy.logo});"></div></div>
                        <div><span class="salary">${vacancy.salary}</span><span class="comment">${vacancy.comment}</span></div>
                        <div><span class="company-name">${vacancy.сompanyName}</span><span class="company-city">${vacancy.city}</span></div>
                        <div class="benefits">${vacancy.benefits}</div>
                        </div>
                </div>
                
            </div>
            <div class="vacancy-bottom">
                <div class="vacancy-btns">
                    <div class="responseButton"></div>
                    <div class="addToFavoritesButton"></div>
                    <div class="disLikeButton"></div>
                </div>
                <div class="publication-time">37 минут назад</div>
            </div>
            </td>
            </tr>
            
            
            `;
  
}
)
vacancyList.innerHTML = html;

    let response = document.querySelector('.responseButton');
    response.addEventListener('click', function(event){
        let fileUploadWrapper = document.createElement('div');
        document.body.appendChild(fileUploadWrapper);
        fileUploadWrapper.className = 'fileUploadWrapper';
        fileUploadWrapper.innerHTML = `
                <div class="fileUpload">
                <h3>Отправка резюме на вакансию</h3>
                    <input type="file" class="inputFileUpload">
                    <input type="button" value="Отправить резюме" class="btnSend">
                </div>
        `;

    });

    let addToFavoritesButton = document.querySelector('.addToFavoritesButton');
    addToFavoritesButton.addEventListener('click', function(){
        addToFavoritesButton.classList.toggle("addToFavoritesButtonTrue");
    })
    let disLikeButton = document.querySelector('.disLikeButton');
    disLikeButton.addEventListener('click', function(){
        disLikeButton.classList.toggle("disLikeButtonTrue");
    })
    





