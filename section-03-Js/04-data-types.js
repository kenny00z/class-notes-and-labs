// DATA types JS

// Tenemos 2 tipos de datos en este tipo de lenguaje :)

// Tenemos Datos primivitos y noPrimitivos.

// COPIAR DE DIEGO LO QUE FALTE


console.log('Wu tang clan is for the children');



// ARRAYS

console.log("My table of my favourite artists");
console.table([
    "Rupatrupa",
    "Linkin park",
    "Violadores del verso",
    "Aurora",
    "The cat empire"
]);



// OBJETOS

console.log("My Bio");
console.table({
    firstName: "Yisus",
    lastName: "García",
    ocuppation: "student",
    hobbies: ["Music", "Guitar Playing", "Sports & Martial arts",
        "Cycling", "Meditation", "Mountain"],
    
    skills: {
        Guitar: "Basics",
        Boxing: "Newbie",
        Coding: "Newbie yet :(",
    },
});


console.table([
    {
        movie: "",
        gennre: [],
        director: [],
        location: "",
        actors: [],
    },
    {
        movie: "Wolf of Wallstreet",
        gennre: ["Drama", "Action", "Comedy"],
        director: ["Martin Scorsese"],
        location: "New York City, NY",
        actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
        year: 2010,
    },
    {
        movie: "Fight Club ",
        gennre: ["Drama", "Noir", "Comedy", "Action"],
        director: ["David Fincher"],
        location: "Los Angeles, California",
        actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
        year: 1999,
    },
    {
        movie: "The Neon Demon",
        gennre: ["Aleix", "Thriller", "Drama"],
        director: ["Nicolas Winding Refn"],
        location: "Copenhagen, Denmark",
        actors: ["Elle Fanning", "Jenna Malone", "Keanu Reeves"],
        year: 2016,
    },

]);


const bio = {
    firtName: "Yisus",
    lastName: "García",
    citiesILivedIn: ["Sabadell","Terrassa"],
    age: 30,
    dob:"4 February",
    drinkAlcohol: true,


    
};

console.log(bio);
console.log(`Yisus drinks alcohol ${bio.drinkAlcohol} `);

const books = [
    {
        bookName: "Los cuatro acuerdos",
        genre: ["Espiritualidad", "Desarollo Personal", "Autoayuda"],
        autor: "Miguel Ángel Ruiz Macías",
        year:1997 ,
        isbn:"9781878424976" ,
    },
    {
        bookName: "El caballero de la armadura oxidada",
        genre: ["Ficción"],
        autor: "Robert Fisher",
        year: 1987,
        isbn: "97884977772303",
        
    },
    {
        bookName: "Los siete rayos",
        genre: ["Espiritualidad", "Crecimiento personal"],
        autor: "Ernesto Wood",
        year: 1989,
        isbn: "9789501701616",
        
    },

];

console.log(books);
console.log(`My favourite book is ${books[0].bookName}.`);

