export const renderPokedex = (container: HTMLElement, pokemon: { id: number; imageSrc: string; name: string; types: string[] }[]): void => {
    const pokedex = `
        ${pokemon.map(renderPokemon).join('')}
    `;

    container.innerHTML = pokedex;
};

const renderPokemon = ({ id, imageSrc, name, types }: { id: number; imageSrc: string; name: string; types: string[] }): string => `
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
