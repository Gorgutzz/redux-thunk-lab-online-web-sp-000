// write and export your action creator function here
function fetchCats() {
  const astronauts = [
    {name: "Neil Armstrong", craft: "Apollo 11"},
    {name: "Buzz Aldrin", craft: "Apollo 11"},
    {name: "Michael Collins", craft: "Apollo 11"}
  ];
  return {
    type: 'ADD_ASTRONAUTS',
    astronauts
  };
};
