export const renderPokedex = (container: HTMLElement, pokemonList: { id: number; imageSrc: string; name: string; types: string[] }[]): void => {
    const pokedex = `
        ${pokemonList.map(pokemon => renderPokemon(pokemon)).join('')}
    `;

    container.innerHTML = pokedex;
};

// Todo: add inline type here:
const renderPokemon = ({ ... }: { ... }): string => `
    <div class="pokemon-card">
        <div class="pokemon">
            <div class="id">#${id}</div>
            <div class="image">
                <img src="${imageSrc}" />
            </div>
            <div class="name">${name}</div>
            <div class="types">${types.join(', ')}</div>
        </div>
    </div>
`;
