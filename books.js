let randLibrary = [];

randLibrary.push(new book('James Martin', 'How to Catch a Wizard', 653, true));
randLibrary.push(new book('Anthony Doerr', 'All the Light We Cannot See', 544, true));
randLibrary.push(new book('Lisa Genova', 'Still Alice', 352, false));
randLibrary.push(new book('Mary Beth Keane', 'Ask Again, Yes', 400, false));
randLibrary.push(new book('Imbolo Mbue', 'Behold the Dreamers', 400, true));
randLibrary.push(new book('Gail Honeyman', 'Eleanor Oliphant is Completely Fine', 352, true));
randLibrary.push(new book('Jojo Moyes', 'Me Before You', 400, false));
randLibrary.push(new book('Kristin Hannah', 'The Great Alone', 448, false));
randLibrary.push(new book('Kazuo Ishiguro', 'The Remains of the Day', 258, false));
randLibrary.push(new book('Khalad Hosseini', 'The Kite Runner', 371, false));
randLibrary.push(new book('Taylor Jenkins Reid', 'Daisy Jones & The Six', 368, false));
randLibrary.push(new book('Ariel Lawhon', 'Code Name Hélène', 464, false));
randLibrary.push(new book('John Grisham', 'A Time to Kill', 496, true));
randLibrary.push(new book('Agatha Christie', 'And Then There Were None', 258, true));
randLibrary.push(new book('Stuart Turton', 'The 7½ Deaths of Evelyn Hardcastle', 448, true));
randLibrary.push(new book('Paula Hawkins', 'The Girl on the Train', 336, false));
randLibrary.push(new book('Jane Harper', 'The Lost Man', 353, false));
randLibrary.push(new book('Andy Weir', 'The Martian', 384, false));
randLibrary.push(new book('Erin Morgenstern', 'The Night Circus', 516, false));
randLibrary.push(new book('Celeste Ng', 'Everything I Never Told You', 304, false));
randLibrary.push(new book('Fredrik Backman', 'A Man Called Ove', 353, false));
randLibrary.push(new book('Delia Owens', 'Where the Crawdads Sing', 384, true));
randLibrary.push(new book('Michelle Obama', 'Becoming', 448, false));
randLibrary.push(new book('Garrett M. Graff', 'The Only Plane in the Sky', 512, true));
randLibrary.push(new book('John Carreyrou', 'Bad Blood', 352, false));
randLibrary.push(new book('Caroline Criado Perez', 'Invisible Woman', 272, false));
randLibrary.push(new book('Jon Krakauer', 'Into Thin Air', 332, false));
randLibrary.push(new book('Audie Murphy', 'To Hell and Back', 274, true));
randLibrary.push(new book('Trevor Noah', 'Born a Crime', 304, false));
randLibrary.push(new book('David McCullough', 'The Great Bridge', 636, false));
randLibrary.push(new book('Charles Duhigg', 'The Power of Habit', 400, true));
randLibrary.push(new book('Tara Westover', 'Educated', 353, false));
randLibrary.push(new book('Michelle Zauner', 'Crying in H Mart', 256, true));
randLibrary.push(new book('Patrick Radden Keefe', 'Empire of Pain', 560, true));
randLibrary.push(new book('Qian Julie Wang', 'Beautiful Country', 320, true));
randLibrary.push(new book('Malcolm Gladwell', 'The Bomber Mafia', 256, true));
randLibrary.push(new book('Erin French', 'Finding Freedom', 304, true));
randLibrary.push(new book('Jamie Raskin', 'Unthinkable', 448, false));
randLibrary.push(new book('A. J. Baime', 'White Lies', 400, false));
randLibrary.push(new book('Daniel H. Pink', 'The Power of Regret', 256, false));
randLibrary.push(new book('Katy Tur', 'Rough Draft', 272, false));
randLibrary.push(new book('Ibram X. Kendi', 'How to Raise an Antiracist', 320, false));
randLibrary.push(new book('Patrick Radden Keefe', 'Rogues', 368, false));


//Adds a randomly selected Book to MyLibrary from our external book library, then creates a new card.
function randomCard(){
    myLibrary.push(randLibrary[[Math.floor(Math.random()*randLibrary.length)]]);
    createCard();
}
