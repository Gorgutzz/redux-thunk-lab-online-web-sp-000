// write and export your action creator function here
function fetchCats() {
  const cats = fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
    return response.json()
  }).then(responseJSON => {
    type: 'ADD_ASTRONAUTS',
    astronauts
  };
};

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}
