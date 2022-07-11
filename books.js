let randLibrary = [];

randLibrary.push(new Book('James Martin', 'How to Catch a Wizard', 653, true));
randLibrary.push(new Book('Anthony Doerr', 'All the Light We Cannot See', 544, true));
randLibrary.push(new Book('Lisa Genova', 'Still Alice', 352, false));
randLibrary.push(new Book('Mary Beth Keane', 'Ask Again, Yes', 400, false));
randLibrary.push(new Book('Imbolo Mbue', 'Behold the Dreamers', 400, true));
randLibrary.push(new Book('Gail Honeyman', 'Eleanor Oliphant is Completely Fine', 352, true));
randLibrary.push(new Book('Jojo Moyes', 'Me Before You', 400, false));
randLibrary.push(new Book('Kristin Hannah', 'The Great Alone', 448, false));
randLibrary.push(new Book('Kazuo Ishiguro', 'The Remains of the Day', 258, false));
randLibrary.push(new Book('Khalad Hosseini', 'The Kite Runner', 371, false));
randLibrary.push(new Book('Taylor Jenkins Reid', 'Daisy Jones & The Six', 368, false));
randLibrary.push(new Book('Ariel Lawhon', 'Code Name Hélène', 464, false));
randLibrary.push(new Book('John Grisham', 'A Time to Kill', 496, true));
randLibrary.push(new Book('Agatha Christie', 'And Then There Were None', 258, true));
randLibrary.push(new Book('Stuart Turton', 'The 7½ Deaths of Evelyn Hardcastle', 448, true));
randLibrary.push(new Book('Paula Hawkins', 'The Girl on the Train', 336, false));
randLibrary.push(new Book('Jane Harper', 'The Lost Man', 353, false));
randLibrary.push(new Book('Andy Weir', 'The Martian', 384, false));
randLibrary.push(new Book('Erin Morgenstern', 'The Night Circus', 516, false));
randLibrary.push(new Book('Celeste Ng', 'Everything I Never Told You', 304, false));
randLibrary.push(new Book('Fredrik Backman', 'A Man Called Ove', 353, false));
randLibrary.push(new Book('Delia Owens', 'Where the Crawdads Sing', 384, true));
randLibrary.push(new Book('Michelle Obama', 'Becoming', 448, false));
randLibrary.push(new Book('Garrett M. Graff', 'The Only Plane in the Sky', 512, true));
randLibrary.push(new Book('John Carreyrou', 'Bad Blood', 352, false));
randLibrary.push(new Book('Caroline Criado Perez', 'Invisible Woman', 272, false));
randLibrary.push(new Book('Jon Krakauer', 'Into Thin Air', 332, false));
randLibrary.push(new Book('Audie Murphy', 'To Hell and Back', 274, true));
randLibrary.push(new Book('Trevor Noah', 'Born a Crime', 304, false));
randLibrary.push(new Book('David McCullough', 'The Great Bridge', 636, false));
randLibrary.push(new Book('Charles Duhigg', 'The Power of Habit', 400, true));
randLibrary.push(new Book('Tara Westover', 'Educated', 353, false));
randLibrary.push(new Book('Michelle Zauner', 'Crying in H Mart', 256, true));
randLibrary.push(new Book('Patrick Radden Keefe', 'Empire of Pain', 560, true));
randLibrary.push(new Book('Qian Julie Wang', 'Beautiful Country', 320, true));
randLibrary.push(new Book('Malcolm Gladwell', 'The Bomber Mafia', 256, true));
randLibrary.push(new Book('Erin French', 'Finding Freedom', 304, true));
randLibrary.push(new Book('Jamie Raskin', 'Unthinkable', 448, false));
randLibrary.push(new Book('A. J. Baime', 'White Lies', 400, false));
randLibrary.push(new Book('Daniel H. Pink', 'The Power of Regret', 256, false));
randLibrary.push(new Book('Katy Tur', 'Rough Draft', 272, false));
randLibrary.push(new Book('Ibram X. Kendi', 'How to Raise an Antiracist', 320, false));
randLibrary.push(new Book('Patrick Radden Keefe', 'Rogues', 368, false));
randLibrary.push(new Book('George R.R Martin','A Song of Ice and Fire', 750, false));

//Adds a randomly selected Book to MyLibrary from our external Book library, then creates a new card.
function randomCard(){
    myLibrary.push(randLibrary[[Math.floor(Math.random()*randLibrary.length)]]);
    createCard();
}
//Preloads the website with 3 cards.
for(x = 3; x > 0; x--){
    randomCard();
  }
  