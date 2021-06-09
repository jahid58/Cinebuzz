const api_key = "351e3d4fdcfb1eb05a1c715cc5128326";
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/day?api_key=${api_key}`,
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${api_key}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${api_key}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${api_key}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  },
};
