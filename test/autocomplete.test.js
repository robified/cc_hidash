// this will setup the testing environment for every single test(it statement)
beforeEach(() => {
    document.querySelector('#target').innerHTML = '';
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Not Avengers' },
                { Title: 'Some other movie' },
            ];
        },
        renderOption(movie) {
            return movie.Title;
        },
    });
});

// it('works!!', () => {});
it('Dropdown starts closed', () => {
    const dropdown = document.querySelector('.dropdown');

    expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', () => {});
