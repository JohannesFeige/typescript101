import './style.css';
import { get } from './pokeApi';
import { renderPokedex } from './renderer';

const init = async () => {
    const result = await fetchPokedex();
    showPokedex(result.pokedex);

    initButtons(result.previous, result.next);
};

// Todo: add type of promise
const fetchPokedex = async (url?: string): Promise<unkown> => {
    showLoading();

    // Todo: get pokedex from api here
    const result = ...;

    hideLoading();

    return result;
};

// Todo: what is the type of pokedex here?
const showPokedex = (pokedex: unkown[]) => {
    const pokedexContainer = document.querySelector<HTMLDivElement>('#pokedex')!;

    renderPokedex(pokedexContainer, pokedex);
};

const initButtons = (previousUrl: string | null, nextUrl: string | null) => {
    const previousButton = updateButton('previous', previousUrl);
    previousButton.addEventListener('click', buttonClickHandler);

    const nextButton = updateButton('next', nextUrl);
    nextButton.addEventListener('click', buttonClickHandler);
};

const buttonClickHandler = async (event: MouseEvent) => {
    const fetchUrl = (event.target as HTMLButtonElement).dataset.fetchUrl;

    if (!fetchUrl) return;

    const result = await fetchPokedex(fetchUrl);

    showPokedex(result.pokedex);
    updateButton('previous', result.previous);
    updateButton('next', result.next);
};

const updateButton = (id: string, fetchUrl: string | null): HTMLButtonElement => {
    const button = findButton(id);

    delete button.dataset.fetchUrl;

    if (fetchUrl) {
        button.dataset.fetchUrl = fetchUrl;
    }

    button.disabled = !Boolean(button.dataset.fetchUrl);

    return button;
};

const findButton = (id: string): HTMLButtonElement => {
    return document.querySelector(`#${id}`)!;
};

const showLoading = () => {
    const loading = document.querySelector('#loading')!;
    loading.classList.add('show');
};

const hideLoading = () => {
    const loading = document.querySelector('#loading')!;
    setTimeout(() => {
        loading.classList.remove('show');
    }, 200);
};

init();
