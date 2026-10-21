
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Shawshank Redemption",
        date: "September 23, 1994",
        description: "A banker sentenced to life in prison forms an unexpected friendship and holds on to hope.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        imgAlt: "Movie poster for The Shawshank Redemption",
        ages: "16+",
        genre: "Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Godfather",
        date: "March 24, 1972",
        description: "The aging patriarch of a crime dynasty transfers control of his empire to his reluctant son.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        imgAlt: "Movie poster for The Godfather",
        ages: "17+",
        genre: "Crime/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Dark Knight",
        date: "July 18, 2008",
        description: "Batman faces a criminal mastermind who pushes Gotham and its heroes toward chaos.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        imgAlt: "Movie poster for The Dark Knight",
        ages: "13+",
        genre: "Action/Crime",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Pulp Fiction",
        date: "October 14, 1994",
        description: "Several connected stories unfold among criminals, prizefighters, and unexpected heroes in Los Angeles.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        imgAlt: "Movie poster for Pulp Fiction",
        ages: "17+",
        genre: "Crime/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Forrest Gump",
        date: "July 6, 1994",
        description: "A kindhearted man experiences major moments in American history while staying true to himself.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        imgAlt: "Movie poster for Forrest Gump",
        ages: "13+",
        genre: "Drama/Romance",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        date: "December 19, 2001",
        description: "A hobbit begins a dangerous journey to destroy a powerful ring before evil can reclaim it.",
        imgSrc: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/86288/85846/LOTR_Fellowship_Reg_A_movie_poster_buy_now_at_starstills__94152__51180.1394515119.jpg?c=2&imbypass=on",
        imgAlt: "Movie poster for The Lord of the Rings: The Fellowship of the Ring",
        ages: "10+",
        genre: "Fantasy/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Inception",
        date: "July 16, 2010",
        description: "A skilled thief who steals secrets through dreams is offered a chance to erase his past.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        imgAlt: "Movie poster for Inception",
        ages: "13+",
        genre: "Sci-Fi/Thriller",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Matrix",
        date: "March 31, 1999",
        description: "A hacker discovers that reality is a simulation and joins a rebellion against its controllers.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
        imgAlt: "Movie poster for The Matrix",
        ages: "13+",
        genre: "Sci-Fi/Action",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Goodfellas",
        date: "September 19, 1990",
        description: "A young man rises through the ranks of a New York crime family and watches his life unravel.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
        imgAlt: "Movie poster for Goodfellas",
        ages: "17+",
        genre: "Crime/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Interstellar",
        date: "November 7, 2014",
        description: "Explorers travel through a wormhole to search for a new home for humanity.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        imgAlt: "Movie poster for Interstellar",
        ages: "10+",
        genre: "Sci-Fi/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Parasite",
        date: "May 30, 2019",
        description: "A struggling family gradually enters the lives of a wealthy household with unexpected results.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
        imgAlt: "Movie poster for Parasite",
        ages: "17+",
        genre: "Thriller/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Whiplash",
        date: "October 10, 2014",
        description: "An ambitious jazz drummer is pushed to his limits by an intense and demanding instructor.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg",
        imgAlt: "Movie poster for Whiplash",
        ages: "16+",
        genre: "Drama/Music",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Green Mile",
        date: "December 10, 1999",
        description: "A prison guard encounters a gentle inmate with a mysterious gift.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg",
        imgAlt: "Movie poster for The Green Mile",
        ages: "16+",
        genre: "Drama/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Spirited Away",
        date: "July 20, 2001",
        description: "A young girl enters a magical spirit world and must find courage to rescue her parents.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        imgAlt: "Movie poster for Spirited Away",
        ages: "8+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Saving Private Ryan",
        date: "July 24, 1998",
        description: "A squad of soldiers searches behind enemy lines for a missing American paratrooper.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
        imgAlt: "Movie poster for Saving Private Ryan",
        ages: "16+",
        genre: "War/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Silence of the Lambs",
        date: "February 14, 1991",
        description: "An FBI trainee seeks the help of an imprisoned killer to catch another dangerous murderer.",
        imgSrc: "https://filmartgallery.com/cdn/shop/files/Silence-of-the-Lambs-Vintage-Movie-Poster-Original_64cc8874_5000x.jpg?v=1771947678",
        imgAlt: "Movie poster for The Silence of the Lambs",
        ages: "17+",
        genre: "Crime/Thriller",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lion King",
        date: "June 24, 1994",
        description: "A young lion prince must reclaim his kingdom after tragedy and betrayal change his life.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
        imgAlt: "Movie poster for The Lion King",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Back to the Future",
        date: "July 3, 1985",
        description: "A teenager accidentally travels to the past and must repair history to get back home.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
        imgAlt: "Movie poster for Back to the Future",
        ages: "10+",
        genre: "Sci-Fi/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Prestige",
        date: "October 20, 2006",
        description: "Two rival magicians become consumed by a dangerous competition to create the ultimate illusion.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
        imgAlt: "Movie poster for The Prestige",
        ages: "13+",
        genre: "Mystery/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Departed",
        date: "October 6, 2006",
        description: "An undercover cop and a mole in the police department race to expose each other.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
        imgAlt: "Movie poster for The Departed",
        ages: "17+",
        genre: "Crime/Thriller",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Gladiator",
        date: "May 5, 2000",
        description: "A betrayed Roman general fights his way through the arena while seeking justice.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        imgAlt: "Movie poster for Gladiator",
        ages: "16+",
        genre: "Action/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Social Network",
        date: "October 1, 2010",
        description: "The creation of a groundbreaking social network strains friendships and reshapes business.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
        imgAlt: "Movie poster for The Social Network",
        ages: "13+",
        genre: "Drama/Biography",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Grand Budapest Hotel",
        date: "March 7, 2014",
        description: "A legendary hotel concierge and his lobby boy become tangled in a theft and family feud.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png",
        imgAlt: "Movie poster for The Grand Budapest Hotel",
        ages: "13+",
        genre: "Comedy/Adventure",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Truman Show",
        date: "June 5, 1998",
        description: "A cheerful insurance salesman slowly realizes that his entire life is being broadcast to the world.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
        imgAlt: "Movie poster for The Truman Show",
        ages: "10+",
        genre: "Comedy/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Eternal Sunshine of the Spotless Mind",
        date: "March 19, 2004",
        description: "A couple undergoes a procedure to erase painful memories of their relationship.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a4/Eternal_Sunshine_of_the_Spotless_Mind.png",
        imgAlt: "Movie poster for Eternal Sunshine of the Spotless Mind",
        ages: "13+",
        genre: "Romance/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Incredibles",
        date: "October 27, 2004",
        description: "A family of retired superheroes returns to action when a new threat appears.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg",
        imgAlt: "Movie poster for The Incredibles",
        ages: "6+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Coco",
        date: "November 22, 2017",
        description: "A young musician enters the Land of the Dead and discovers the truth about his family history.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        imgAlt: "Movie poster for Coco",
        ages: "6+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Toy Story",
        date: "November 22, 1995",
        description: "A cowboy toy feels threatened when a flashy new space ranger becomes a boy's favorite.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        imgAlt: "Movie poster for Toy Story",
        ages: "6+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "A cautious clownfish crosses the ocean to find his son after he is taken from the reef.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        imgAlt: "Movie poster for Finding Nemo",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "How to Train Your Dragon",
        date: "March 26, 2010",
        description: "A young Viking befriends a wounded dragon and challenges his village's beliefs.",
        imgSrc: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
        imgAlt: "Movie poster for How to Train Your Dragon",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Ratatouille",
        date: "June 29, 2007",
        description: "A talented rat teams up with a kitchen worker to pursue a dream of becoming a chef in Paris.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
        imgAlt: "Movie poster for Ratatouille",
        ages: "6+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Wall-E",
        date: "June 27, 2008",
        description: "A lonely waste-collecting robot discovers a new purpose when a sleek probe arrives on Earth.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
        imgAlt: "Movie poster for Wall-E",
        ages: "6+",
        genre: "Animation/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Little Women",
        date: "December 25, 2019",
        description: "Four sisters come of age and pursue their own paths during the American Civil War era.",
        imgSrc: "https://www.sonypictures.ca/sites/canada/files/2024-09/DP_5033570_LITTLE%20WOMEN%20%282019%29_2000x3000_English%20%28US%29%20%281%29.jpg",
        imgAlt: "Movie poster for Little Women",
        ages: "10+",
        genre: "Drama/Romance",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Hidden Figures",
        date: "December 25, 2016",
        description: "Three brilliant mathematicians help NASA achieve major milestones during the space race.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/4f/The_official_poster_for_the_film_Hidden_Figures%2C_2016.jpg",
        imgAlt: "Movie poster for Hidden Figures",
        ages: "10+",
        genre: "Drama/History",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Martian",
        date: "October 2, 2015",
        description: "An astronaut stranded on Mars uses science and ingenuity to survive until rescue is possible.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg",
        imgAlt: "Movie poster for The Martian",
        ages: "10+",
        genre: "Sci-Fi/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Arrival",
        date: "November 11, 2016",
        description: "A linguist works to communicate with mysterious visitors and prevent a global conflict.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
        imgAlt: "Movie poster for Arrival",
        ages: "13+",
        genre: "Sci-Fi/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Mad Max: Fury Road",
        date: "May 15, 2015",
        description: "A group of rebels races across a desert wasteland while escaping a brutal warlord.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
        imgAlt: "Movie poster for Mad Max: Fury Road",
        ages: "16+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Oppenheimer",
        date: "July 21, 2023",
        description: "A brilliant physicist leads the secret project that develops the first atomic bomb.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        imgAlt: "Movie poster for Oppenheimer",
        ages: "16+",
        genre: "Biography/Drama",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Barbie",
        date: "July 21, 2023",
        description: "A perfect day in Barbie Land leads one Barbie to question her world and discover the real one.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
        imgAlt: "Movie poster for Barbie",
        ages: "10+",
        genre: "Comedy/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Everything Everywhere All at Once",
        date: "March 25, 2022",
        description: "An exhausted laundromat owner connects with alternate versions of herself to save the multiverse.",
        imgSrc: "https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
        imgAlt: "Movie poster for Everything Everywhere All at Once",
        ages: "16+",
        genre: "Action/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Dune: Part Two",
        date: "March 1, 2024",
        description: "Paul Atreides joins the Fremen and seeks revenge while preparing for a war across the desert planet.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
        imgAlt: "Movie poster for Dune: Part Two",
        ages: "13+",
        genre: "Sci-Fi/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Incredibles 2",
        date: "June 15, 2018",
        description: "Helen Parr takes the spotlight as a superhero while Bob manages the challenges of family life.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1f/Incredibles_2_%282018_animated_film%29.jpg",
        imgAlt: "Movie poster for The Incredibles 2",
        ages: "6+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Knives Out",
        date: "November 27, 2019",
        description: "A detective investigates a wealthy family's secrets after the patriarch dies unexpectedly.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1f/Knives_Out_poster.jpeg",
        imgAlt: "Movie poster for Knives Out",
        ages: "13+",
        genre: "Mystery/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Princess Bride",
        date: "October 9, 1987",
        description: "A farmhand becomes a masked hero while trying to rescue his true love from an evil prince.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/db/Princess_bride.jpg",
        imgAlt: "Movie poster for The Princess Bride",
        ages: "10+",
        genre: "Adventure/Comedy",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Jurassic Park",
        date: "June 11, 1993",
        description: "Visitors to a dinosaur theme park fight to survive when the animals break free.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        imgAlt: "Movie poster for Jurassic Park",
        ages: "10+",
        genre: "Adventure/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "Spider-Man: Across the Spider-Verse",
        date: "June 2, 2023",
        description: "Miles Morales travels across the multiverse and meets a team of Spider-People facing a new threat.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
        imgAlt: "Movie poster for Spider-Man: Across the Spider-Verse",
        ages: "10+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lord of the Rings: The Two Towers",
        date: "December 18, 2002",
        description: "The fellowship faces new dangers as Frodo and Sam continue toward Mordor and the others defend Rohan.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a1/Lord_Rings_Two_Towers.jpg",
        imgAlt: "Movie poster for The Lord of the Rings: The Two Towers",
        ages: "10+",
        genre: "Fantasy/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        date: "December 17, 2003",
        description: "The final battle for Middle-earth begins while Frodo and Sam make their last journey to Mount Doom.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
        imgAlt: "Movie poster for The Lord of the Rings: The Return of the King",
        ages: "10+",
        genre: "Fantasy/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "A Beautiful Mind",
        date: "January 4, 2002",
        description: "A gifted mathematician confronts a difficult diagnosis while pursuing a groundbreaking idea.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg",
        imgAlt: "Movie poster for A Beautiful Mind",
        ages: "13+",
        genre: "Biography/Drama",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Sound of Music",
        date: "March 2, 1965",
        description: "A hopeful governess brings music and joy to a strict household in the Austrian Alps.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Sound_of_music.jpg",
        imgAlt: "Movie poster for The Sound of Music",
        ages: "6+",
        genre: "Musical/Drama",
        stars: "⭐⭐⭐⭐⭐"
      }
    ];


let movieList = document.querySelector('#movie-list');

movies.forEach(movie => {
    let article =  `
        <article class="movie">
            <h2>${movie.title}</h2>
            <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
            <p><strong>Release Date:</strong> ${movie.date}</p>
            <p><strong>Recommended Age:</strong> ${movie.ages}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
            <p id='desc'>${movie.description}</p>
        </article>
    `;
    
    movieList.innerHTML += article;

});
