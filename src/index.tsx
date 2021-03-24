import { render } from 'react-dom'
import { createServer } from 'miragejs';
import { App } from './App'

const genres = [
  {
    "id": 1,
    "name": "action",
    "title": "Ação"
  },
  {
    "id": 2,
    "name": "comedy",
    "title": "Comédia"
  },
  {
    "id": 3,
    "name": "documentary",
    "title": "Documentário"
  },
  {
    "id": 4,
    "name": "drama",
    "title": "Drama"
  },
  {
    "id": 5,
    "name": "horror",
    "title": "Terror"
  },
  {
    "id": 6,
    "name": "family",
    "title": "Família"
  }
];

const movies = [
  {
    "Genre_id": 1,
    "Title": "Underdog",
    "Year": "2007",
    "Rated": "PG",
    "Released": "03 Aug 2007",
    "Runtime": "84 min",
    "Genre": "Action, Adventure, Comedy, Family, Fantasy, Sci-Fi",
    "Director": "Frederik Du Chau",
    "Writer": "Adam Rifkin (screenplay), Joe Piscatella (screenplay), Craig A. Williams (screenplay), Joe Piscatella (story), Craig A. Williams (story), Adam Rifkin (story), W. Watts Biggers (television series)",
    "Actors": "Jason Lee, Peter Dinklage, Jim Belushi, Patrick Warburton",
    "Plot": "A Beagle must use his newly-bestowed superpowers to defend Capitol City from mad scientist Simon Barsinister.",
    "Language": "English",
    "Country": "USA",
    "Awards": "3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "10/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "16%"
      },
      {
        "Source": "Metacritic",
        "Value": "37/100"
      }
    ],
    "Metascore": "37",
    "imdbRating": "4.7",
    "imdbVotes": "19,729",
    "imdbID": "tt0467110",
    "Type": "movie",
    "DVD": "08 Jul 2016",
    "BoxOffice": "$43,760,605",
    "Production": "Spyglass Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 1,
    "Title": "Honest Thief",
    "Year": "2020",
    "Rated": "PG-13",
    "Released": "16 Oct 2020",
    "Runtime": "99 min",
    "Genre": "Action, Crime, Drama, Thriller",
    "Director": "Mark Williams",
    "Writer": "Steve Allrich, Mark Williams, Steve Allrich (story by), Mark Williams (story by)",
    "Actors": "Liam Neeson, Kate Walsh, Jai Courtney, Jeffrey Donovan",
    "Plot": "Wanting to lead an honest life, a notorious bank robber turns himself in, only to be double-crossed by two ruthless FBI agents.",
    "Language": "German, English, Spanish",
    "Country": "USA",
    "Awards": "1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjEwNjYyMTMtODc5Yi00NTg5LTkwMzAtZTkyOTcyNTFkMGIyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.0/10"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "6.0",
    "imdbVotes": "23,614",
    "imdbID": "tt1838556",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$14,163,574",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 1,
    "Title": "Star Wars: Episode III - Revenge of the Sith",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "19 May 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
    "Plot": "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 26 wins & 62 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "80%"
      },
      {
        "Source": "Metacritic",
        "Value": "68/100"
      }
    ],
    "Metascore": "68",
    "imdbRating": "7.5",
    "imdbVotes": "714,007",
    "imdbID": "tt0121766",
    "Type": "movie",
    "DVD": "10 Apr 2015",
    "BoxOffice": "$380,270,577",
    "Production": "Lucasfilm Ltd.",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 1,
    "Title": "Deadpool",
    "Year": "2016",
    "Rated": "R",
    "Released": "12 Feb 2016",
    "Runtime": "108 min",
    "Genre": "Action, Adventure, Comedy, Sci-Fi",
    "Director": "Tim Miller",
    "Writer": "Rhett Reese, Paul Wernick",
    "Actors": "Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer",
    "Plot": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Golden Globes. Another 28 wins & 76 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "65/100"
      }
    ],
    "Metascore": "65",
    "imdbRating": "8.0",
    "imdbVotes": "904,840",
    "imdbID": "tt1431045",
    "Type": "movie",
    "DVD": "21 Apr 2016",
    "BoxOffice": "$363,070,709",
    "Production": "Kinberg Genre, Donners&#39; Company",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 2,
    "Title": "Bruce Almighty",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "23 May 2003",
    "Runtime": "101 min",
    "Genre": "Comedy, Fantasy",
    "Director": "Tom Shadyac",
    "Writer": "Steve Koren (story), Mark O'Keefe (story), Steve Koren (screenplay), Mark O'Keefe (screenplay), Steve Oedekerk (screenplay)",
    "Actors": "Jim Carrey, Morgan Freeman, Jennifer Aniston, Philip Baker Hall",
    "Plot": "A guy who complains about God too often is given almighty powers to teach him how difficult it is to run the world.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "7 wins & 9 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzMyZDhiZDUtYWUyMi00ZDQxLWE4NDQtMWFlMjI1YjVjMjZiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "48%"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "6.8",
    "imdbVotes": "372,120",
    "imdbID": "tt0315327",
    "Type": "movie",
    "DVD": "01 Dec 2015",
    "BoxOffice": "$242,829,261",
    "Production": "Spyglass Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 2,
    "Title": "Bad Boys for Life",
    "Year": "2020",
    "Rated": "R",
    "Released": "17 Jan 2020",
    "Runtime": "124 min",
    "Genre": "Action, Comedy, Crime, Thriller",
    "Director": "Adil El Arbi, Bilall Fallah",
    "Writer": "Peter Craig (story by), Joe Carnahan (story by), Chris Bremner (screenplay by), Peter Craig (screenplay by), Joe Carnahan (screenplay by), George Gallo (based on characters created by)",
    "Actors": "Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig",
    "Plot": "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
    "Language": "English, Spanish",
    "Country": "USA, Mexico",
    "Awards": "2 wins & 12 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      },
      {
        "Source": "Metacritic",
        "Value": "59/100"
      }
    ],
    "Metascore": "59",
    "imdbRating": "6.6",
    "imdbVotes": "131,495",
    "imdbID": "tt1502397",
    "Type": "movie",
    "DVD": "31 Mar 2020",
    "BoxOffice": "$206,305,244",
    "Production": "2.0 Entertainment, Jerry Bruckheimer Films, Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 2,
    "Title": "Sausage Party",
    "Year": "2016",
    "Rated": "R",
    "Released": "12 Aug 2016",
    "Runtime": "89 min",
    "Genre": "Animation, Adventure, Comedy, Fantasy",
    "Director": "Greg Tiernan, Conrad Vernon",
    "Writer": "Kyle Hunter (screenplay by), Ariel Shaffir (screenplay by), Seth Rogen (screenplay by), Evan Goldberg (screenplay by), Seth Rogen (story by), Evan Goldberg (story by), Jonah Hill (story by)",
    "Actors": "Alistair Abell, Iris Apatow, Sugar Lyn Beard, Michael Cera",
    "Plot": "A sausage strives to discover the truth about his existence.",
    "Language": "English",
    "Country": "USA, Canada",
    "Awards": "1 win & 24 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjkxOTk1MzY4MF5BMl5BanBnXkFtZTgwODQzOTU5ODE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "82%"
      },
      {
        "Source": "Metacritic",
        "Value": "66/100"
      }
    ],
    "Metascore": "66",
    "imdbRating": "6.1",
    "imdbVotes": "176,325",
    "imdbID": "tt1700841",
    "Type": "movie",
    "DVD": "04 Nov 2016",
    "BoxOffice": "$97,685,686",
    "Production": "Sony Music, Point Grey, Annapurna Pictures, Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 2,
    "Title": "A Dog's Purpose",
    "Year": "2017",
    "Rated": "PG",
    "Released": "27 Jan 2017",
    "Runtime": "100 min",
    "Genre": "Adventure, Comedy, Drama, Family, Fantasy",
    "Director": "Lasse Hallström",
    "Writer": "W. Bruce Cameron (screenplay by), Cathryn Michon (screenplay by), Audrey Wells (screenplay by), Maya Forbes (screenplay by), Wallace Wolodarsky (screenplay), W. Bruce Cameron (based on the novel by)",
    "Actors": "Josh Gad, Dennis Quaid, Peggy Lipton, Bryce Gheisar",
    "Plot": "A dog looks to discover his purpose in life over the course of several lifetimes and owners.",
    "Language": "English",
    "Country": "USA, India",
    "Awards": "3 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4NjkxNzgzN15BMl5BanBnXkFtZTgwMjAzODQ4OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "35%"
      },
      {
        "Source": "Metacritic",
        "Value": "43/100"
      }
    ],
    "Metascore": "43",
    "imdbRating": "7.2",
    "imdbVotes": "65,912",
    "imdbID": "tt1753383",
    "Type": "movie",
    "DVD": "18 Apr 2017",
    "BoxOffice": "$64,508,620",
    "Production": "Reliance Entertainment, Universal Pictures, Walden Media, Pariah",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 3,
    "Title": "Apollo 11",
    "Year": "2019",
    "Rated": "G",
    "Released": "01 Mar 2019",
    "Runtime": "93 min",
    "Genre": "Documentary, History",
    "Director": "Todd Douglas Miller",
    "Writer": "N/A",
    "Actors": "Neil Armstrong, Michael Collins, Buzz Aldrin, Deke Slayton",
    "Plot": "A look at the Apollo 11 mission to land on the moon led by commander Neil Armstrong and pilots Buzz Aldrin and Michael Collins.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Won 3 Primetime Emmys. Another 52 wins & 42 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMzEzNjI4M15BMl5BanBnXkFtZTgwODgxOTgyNzM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "99%"
      },
      {
        "Source": "Metacritic",
        "Value": "88/100"
      }
    ],
    "Metascore": "88",
    "imdbRating": "8.2",
    "imdbVotes": "22,107",
    "imdbID": "tt8760684",
    "Type": "movie",
    "DVD": "14 May 2019",
    "BoxOffice": "$9,039,891",
    "Production": "CNN Films, Statement Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 3,
    "Title": "Kiss the Ground",
    "Year": "2020",
    "Rated": "N/A",
    "Released": "01 Apr 2020",
    "Runtime": "84 min",
    "Genre": "Documentary",
    "Director": "Joshua Tickell, Rebecca Harrell Tickell",
    "Writer": "Johnny O'Hara, Joshua Tickell, Rebecca Harrell Tickell",
    "Actors": "Woody Harrelson, Ray Archuleta, John Wick, Kristin Ohlson",
    "Plot": "A revolutionary group of activists, scientists, farmers, and politicians band together in a global movement of \"Regenerative Agriculture\" that could balance our climate, replenish our vast water supplies, and feed the world",
    "Language": "English",
    "Country": "USA",
    "Awards": "4 wins & 4 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmJkOWRhZWUtZmNlZC00NWYwLThiMmEtZjZkMTI4N2Y1NDMxXkEyXkFqcGdeQXVyMTE5NTc0NzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.3/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "4,733",
    "imdbID": "tt8618654",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 3,
    "Title": "The Game Changers",
    "Year": "2018",
    "Rated": "N/A",
    "Released": "16 Sep 2019",
    "Runtime": "86 min",
    "Genre": "Documentary",
    "Director": "Louie Psihoyos",
    "Writer": "Shannon Kornelsen (Co-writer), Mark Monroe, Joseph Pace",
    "Actors": "James Wilks, Arnold Schwarzenegger, Patrik Baboumian, Dotsie Bausch",
    "Plot": "A UFC fighter's world is turned upside down when he discovers an elite group of world-renowned athletes and scientists who prove that everything he had been taught about protein was a lie.",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzg4ZjMzOWEtZjBhZi00MzgxLWEzNmItYjVlYjY0MGQ5ZmM5XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.9",
    "imdbVotes": "16,197",
    "imdbID": "tt7455754",
    "Type": "movie",
    "DVD": "01 Oct 2019",
    "BoxOffice": "$739,711",
    "Production": "Diamond Docs, ReFuel Productions, Oceanic Preservation Society",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 3,
    "Title": "American Factory",
    "Year": "2019",
    "Rated": "TV-14",
    "Released": "21 Aug 2019",
    "Runtime": "110 min",
    "Genre": "Documentary",
    "Director": "Steven Bognar, Julia Reichert",
    "Writer": "N/A",
    "Actors": "Junming 'Jimmy' Wang, Robert Allen, Sherrod Brown, Dave Burrows",
    "Plot": "In post-industrial Ohio, a Chinese billionaire opens a factory in an abandoned General Motors plant, hiring two thousand Americans. Early days of hope and optimism give way to setbacks as high-tech China clashes with working-class America.",
    "Language": "English, Mandarin",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 18 wins & 48 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWFkMDY1MjItZmNkOS00MDg2LWFlMjMtZWU3YmM0MmY3MWM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "96%"
      },
      {
        "Source": "Metacritic",
        "Value": "86/100"
      }
    ],
    "Metascore": "86",
    "imdbRating": "7.4",
    "imdbVotes": "17,956",
    "imdbID": "tt9351980",
    "Type": "movie",
    "DVD": "21 Aug 2019",
    "BoxOffice": "N/A",
    "Production": "Participant Media",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 4,
    "Title": "The Blue Lagoon",
    "Year": "1980",
    "Rated": "R",
    "Released": "02 Jul 1980",
    "Runtime": "104 min",
    "Genre": "Adventure, Drama, Romance",
    "Director": "Randal Kleiser",
    "Writer": "Henry De Vere Stacpoole (based on the novel by), Douglas Day Stewart (screenplay by)",
    "Actors": "Brooke Shields, Christopher Atkins, Leo McKern, William Daniels",
    "Plot": "In the Victorian period, two children are shipwrecked on a tropical island in the South Pacific. With no adults to guide them, the two make a simple life together, unaware that sexual maturity will eventually intervene.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 4 wins & 7 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWU2ZDIxY2UtNzM5NS00MWUwLTkxN2QtMmI3NDZkNTA2OTYxXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "10/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "8%"
      },
      {
        "Source": "Metacritic",
        "Value": "31/100"
      }
    ],
    "Metascore": "31",
    "imdbRating": "5.8",
    "imdbVotes": "63,278",
    "imdbID": "tt0080453",
    "Type": "movie",
    "DVD": "16 Apr 2012",
    "BoxOffice": "$58,853,106",
    "Production": "Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 4,
    "Title": "Gone Girl",
    "Year": "2014",
    "Rated": "R",
    "Released": "03 Oct 2014",
    "Runtime": "149 min",
    "Genre": "Drama, Mystery, Thriller",
    "Director": "David Fincher",
    "Writer": "Gillian Flynn (screenplay), Gillian Flynn (novel)",
    "Actors": "Ben Affleck, Rosamund Pike, Neil Patrick Harris, Tyler Perry",
    "Plot": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 64 wins & 186 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "87%"
      },
      {
        "Source": "Metacritic",
        "Value": "79/100"
      }
    ],
    "Metascore": "79",
    "imdbRating": "8.1",
    "imdbVotes": "863,582",
    "imdbID": "tt2267998",
    "Type": "movie",
    "DVD": "01 Jun 2016",
    "BoxOffice": "$167,767,189",
    "Production": "TSG Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 4,
    "Title": "The Revenant",
    "Year": "2015",
    "Rated": "R",
    "Released": "08 Jan 2016",
    "Runtime": "156 min",
    "Genre": "Action, Adventure, Drama, History, Western",
    "Director": "Alejandro G. Iñárritu",
    "Writer": "Mark L. Smith (screenplay), Alejandro G. Iñárritu (screenplay), Michael Punke (based in part on the novel by)",
    "Actors": "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter",
    "Plot": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    "Language": "English, Pawnee, French",
    "Country": "USA, Hong Kong, Taiwan",
    "Awards": "Won 3 Oscars. Another 87 wins & 187 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "78%"
      },
      {
        "Source": "Metacritic",
        "Value": "76/100"
      }
    ],
    "Metascore": "76",
    "imdbRating": "8.0",
    "imdbVotes": "709,377",
    "imdbID": "tt1663202",
    "Type": "movie",
    "DVD": "22 Mar 2016",
    "BoxOffice": "$183,637,894",
    "Production": "Appian Way, New Regency Pictures, M Prods, Anonymous Content",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 4,
    "Title": "After",
    "Year": "2019",
    "Rated": "PG-13",
    "Released": "12 Apr 2019",
    "Runtime": "105 min",
    "Genre": "Drama, Romance",
    "Director": "Jenny Gage",
    "Writer": "Susan McMartin (screenplay by), Tamara Chestna (screenplay by), Jenny Gage (screenplay by), Tom Betterton (screenplay by), Anna Todd (based on the novel by)",
    "Actors": "Josephine Langford, Hero Fiennes Tiffin, Khadijha Red Thunder, Dylan Arnold",
    "Plot": "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd.",
    "Language": "English",
    "Country": "USA",
    "Awards": "4 wins.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMjk3YzktNDI0Yy00MzFiLWFjNmEtYTA2ODVjMzNhODhjXkEyXkFqcGdeQXVyOTQ1MDI4MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "18%"
      },
      {
        "Source": "Metacritic",
        "Value": "30/100"
      }
    ],
    "Metascore": "30",
    "imdbRating": "5.3",
    "imdbVotes": "38,125",
    "imdbID": "tt4126476",
    "Type": "movie",
    "DVD": "25 Jun 2019",
    "BoxOffice": "$12,138,565",
    "Production": "Wattpad, Offspring Entertainment, Diamond Film Productions, Voltage Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 5,
    "Title": "Mary",
    "Year": "2019",
    "Rated": "R",
    "Released": "11 Oct 2019",
    "Runtime": "84 min",
    "Genre": "Horror, Mystery",
    "Director": "Michael Goi",
    "Writer": "Anthony Jaswinski",
    "Actors": "Gary Oldman, Emily Mortimer, Manuel Garcia-Rulfo, Stefanie Scott",
    "Plot": "A family looking to start a charter-boat business buys a ship that holds terrifying secrets once out on isolated waters.",
    "Language": "English",
    "Country": "USA, Canada",
    "Awards": "1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzk1MGYyYmQtZjA3NC00ZWZiLTg1NWMtMjEwNTVlODM5OWVkXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "4.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "4%"
      },
      {
        "Source": "Metacritic",
        "Value": "31/100"
      }
    ],
    "Metascore": "31",
    "imdbRating": "4.4",
    "imdbVotes": "3,094",
    "imdbID": "tt5834854",
    "Type": "movie",
    "DVD": "11 Oct 2019",
    "BoxOffice": "N/A",
    "Production": "Tucker Tooley Entertainment",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 5,
    "Title": "The Grudge",
    "Year": "2004",
    "Rated": "PG-13",
    "Released": "22 Oct 2004",
    "Runtime": "91 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "Takashi Shimizu",
    "Writer": "Stephen Susco (screenplay), Takashi Shimizu (film \"Ju-On: The Grudge\")",
    "Actors": "Sarah Michelle Gellar, Jason Behr, William Mapother, Clea DuVall",
    "Plot": "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
    "Language": "English, Japanese",
    "Country": "USA, Japan",
    "Awards": "2 wins & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxODg1Nzc3NF5BMl5BanBnXkFtZTcwMjM0MjEzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "40%"
      },
      {
        "Source": "Metacritic",
        "Value": "49/100"
      }
    ],
    "Metascore": "49",
    "imdbRating": "5.9",
    "imdbVotes": "138,933",
    "imdbID": "tt0391198",
    "Type": "movie",
    "DVD": "18 Jun 2013",
    "BoxOffice": "$110,359,362",
    "Production": "Senator International, Ghost House Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 5,
    "Title": "Gretel & Hansel",
    "Year": "2020",
    "Rated": "PG-13",
    "Released": "31 Jan 2020",
    "Runtime": "87 min",
    "Genre": "Fantasy, Horror, Mystery, Thriller",
    "Director": "Oz Perkins",
    "Writer": "Rob Hayes",
    "Actors": "Sophia Lillis, Samuel Leakey, Alice Krige, Jessica De Gouw",
    "Plot": "A long time ago in a distant fairy tale countryside, a young girl leads her little brother into a dark wood in desperate search of food and work, only to stumble upon a nexus of terrifying evil.",
    "Language": "English",
    "Country": "USA, Canada, Ireland, South Africa",
    "Awards": "1 win & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTIyYWJjZDctODY4OC00NWExLWE2NTktZmY0MWY2YWZjMWIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.4/10"
      },
      {
        "Source": "Metacritic",
        "Value": "64/100"
      }
    ],
    "Metascore": "64",
    "imdbRating": "5.4",
    "imdbVotes": "24,098",
    "imdbID": "tt9086228",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$15,347,654",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 5,
    "Title": "The Nun",
    "Year": "2018",
    "Rated": "R",
    "Released": "07 Sep 2018",
    "Runtime": "96 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "Corin Hardy",
    "Writer": "Gary Dauberman (screenplay by), James Wan (story by), Gary Dauberman (story by)",
    "Actors": "Demián Bichir, Taissa Farmiga, Jonas Bloquet, Bonnie Aarons",
    "Plot": "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
    "Language": "English, French, Romanian, Latin",
    "Country": "USA",
    "Awards": "2 wins & 1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.3/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "25%"
      },
      {
        "Source": "Metacritic",
        "Value": "46/100"
      }
    ],
    "Metascore": "46",
    "imdbRating": "5.3",
    "imdbVotes": "119,020",
    "imdbID": "tt5814060",
    "Type": "movie",
    "DVD": "20 Nov 2018",
    "BoxOffice": "$117,450,119",
    "Production": "Atomic Monster, Safran Company",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 6,
    "Title": "100% Wolf",
    "Year": "2020",
    "Rated": "PG",
    "Released": "01 Dec 2020",
    "Runtime": "96 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
    "Director": "Alexs Stadermann",
    "Writer": "Ranald Allan (story contribution), David Breen (story contribution), Fin Edquist (screenplay by), Alexs Stadermann (head of story), Stephanie Zehnal (story contribution)",
    "Actors": "Loren Gray, Adriane Daff, Jane Lynch, Jai Courtney",
    "Plot": "100% Wolf centers on Freddy Lupin, heir to a proud family line of werewolves. Positive he'll become the most fearsome werewolf ever, Freddy is in for a shock when his first \"warfing\" goes awry, turning him into a ferocious - poodle.",
    "Language": "English",
    "Country": "Australia, Belgium",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmRiYTM3ZGMtNzA1Yy00OWQ1LWE2ZGEtZTRiYzYyZDZjYWYwXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "5.7/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.7",
    "imdbVotes": "782",
    "imdbID": "tt8774798",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$512,805",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 6,
    "Title": "Woody Woodpecker",
    "Year": "2017",
    "Rated": "PG",
    "Released": "22 Nov 2019",
    "Runtime": "91 min",
    "Genre": "Comedy, Family",
    "Director": "Alex Zamm",
    "Writer": "Alex Zamm, William Robertson, Walter Lantz (based on the character created by), Ben Hardaway (based on the character created by), Alex Zamm (story), William Robertson (story), Daniel Altiere (story), Steven Altiere (story)",
    "Actors": "Eric Bauza, Timothy Omundson, Graham Verchere, Jordana Largy",
    "Plot": "The hyperactive red-headed bird enters a turf war with a big city lawyer wanting to tear down his home in an effort to build a house to flip.",
    "Language": "English",
    "Country": "USA",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjJjMmRkNjYtNmJhNi00ZDM1LWEzMjMtOWZjNjgxODc1YmFlXkEyXkFqcGdeQXVyOTQyNTIzNjM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "4.1/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "13%"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.1",
    "imdbVotes": "3,543",
    "imdbID": "tt2114504",
    "Type": "movie",
    "DVD": "06 Feb 2018",
    "BoxOffice": "N/A",
    "Production": "Universal Studios Inc., Universal Pictures, Universal Studios Home Entertainment, Universal Studios Family Produ",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 6,
    "Title": "Ferdinand",
    "Year": "2017",
    "Rated": "PG",
    "Released": "15 Dec 2017",
    "Runtime": "108 min",
    "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
    "Director": "Carlos Saldanha",
    "Writer": "Robert L. Baird (screenplay by), Tim Federle (screenplay by), Brad Copeland (screenplay by), Ron Burch (screen story by), David Kidd (screen story by), Don Rhymer (screen story by), Munro Leaf (based upon the book \"The Story of Ferdinand\" by), Robert Lawson (based upon the book \"The Story of Ferdinand\" by: illustrations)",
    "Actors": "Jack Gore, Jet Jurgensmeyer, Nile Diaz, Colin H. Murphy",
    "Plot": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.",
    "Language": "English, Spanish, German",
    "Country": "USA, Spain",
    "Awards": "Nominated for 1 Oscar. Another 2 wins & 19 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.7/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
      },
      {
        "Source": "Metacritic",
        "Value": "58/100"
      }
    ],
    "Metascore": "58",
    "imdbRating": "6.7",
    "imdbVotes": "48,883",
    "imdbID": "tt3411444",
    "Type": "movie",
    "DVD": "23 Feb 2018",
    "BoxOffice": "$84,410,380",
    "Production": "Blue Sky Studios",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Genre_id": 6,
    "Title": "Pets United",
    "Year": "2019",
    "Rated": "TV-Y7",
    "Released": "11 Sep 2020",
    "Runtime": "89 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Reinhard Klooss",
    "Writer": "Reinhard Klooss, Reinhard Klooss (based on the story by), Oliver Huzly (based on the story by)",
    "Actors": "Patrick Roche, Natalie Dormer, Felix Auer, Jeff Burrell",
    "Plot": "A group of spoilt, selfish pets led by glamour cat Belle are stranded in their luxury hangout 'Pampered Pets,' when the machines that run Robo City, the hypermodern metropolis that they live in, go wild and take over.",
    "Language": "English",
    "Country": "Germany, China, UK",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmU2YTEwODktZDFlNC00YWJmLTk0NjEtMzZjMjM4Y2E3NjdiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "3.8/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "3.8",
    "imdbVotes": "1,858",
    "imdbID": "tt11276598",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }
];;

createServer({
  routes(){
    this.get('/genres', () => {
      return genres;
    })
    
    this.get('/genres/:id', (schema, request) => {
      let id = request.params.id
      return genres.filter(genre => genre.id === parseInt(id, 10))
    })

    this.get('/movies/genre/:id', (schema, request) => {

      let id = request.params.id
      return movies.filter(movie => movie.Genre_id === parseInt(id, 10))
    })
    
  }
})


render(<App />, document.getElementById('root'))