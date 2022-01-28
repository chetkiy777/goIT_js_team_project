const list = document.querySelector('.list')
const modal = document.querySelector('[data-modal]')
const library = document.querySelector('[data-lib]')

export default class RenderService {
    constructor() {

    }

    renderAllFilms(filmArray) {
        const markup = filmArray.map(({id, title, poster_path}) => {
            const imagePath = `https://image.tmdb.org/t/p/w500/${poster_path}`
            return `<li class="list__item" id=${id}>
                    <div class="img-thumb">
                        <img class="item__img" src=${imagePath} alt="poster"> 
                    </div>
                    <p class="item__title">${title}</p>
                </li>`
        }).join('')

        list.insertAdjacentHTML('afterbegin', markup)
    }

    renderFilmDetails(film) {
        modal.innerHTML = ''

        const {id, poster_path, title, popularity, genres, overview} = film
        const imagePath = `https://image.tmdb.org/t/p/w500/${poster_path}`
        
        const markup = `
            <div class="film-details" id=${id}>

                <div class="img-thumb">
                    <img src=${imagePath} alt="poster">
                </div>

                <div class="about">
                    <label class="about__label">
                        Просмотров: 
                        <p class="about__field popularity">${popularity}</p>
                    </label>

                    <label class="about__label">
                        Фильм: 
                        <p class="about__field title">${title}</p>
                    </label>
                    
                    <label class="about__label">
                        Жанр: 
                        <p class="about__field genres">${genres}</p>
                    </label>

                    <label class="about__label">
                        О чём: 
                        <p class="about__field overview">${overview}</p>
                    </label>
                    
                </div>

                <button class="close-btn" data-action="close">x</button>

                <div class="btn-block">
                    <button class="add-to-lib-btn" data-action="addToLib">add to library</button>
                    <button class="add-to-que-btn" data-action="addToQue">add to queue</button>
                </div>
            
            </div>
        `

        modal.insertAdjacentHTML('afterbegin', markup)
    }

}