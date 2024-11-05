var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954,
        cast: ['Jimmy Stewart', 'Grace Kelly', 'Thelma Ritter'],
        relatedMovies: [
            {
                title: 'Psycho',
                director: 'Alfred Hitchcock',
                year: "1960"
            },
            {
                title: 'Body Double',
                director: 'Brian De Palma',
                year: "1984"
            }
        ]
    },
    {
        title: 'Cape Fear',
        director: 'Martin Scorsese',
        year: 1991,
        cast: ['Robert De Niro', 'Nick Nolte', 'Jessica Lange'],
        relatedMovies: [
            {
                title: 'Night of the Hunter',
                director: 'Charles Laughton',
                year: "1955"
            },
            {
                title: 'Misery',
                director: 'Rob Reiner',
                year: "1990"
            }
        ]
    },
    {
        title: 'Fright Night',
        director: 'Tom Holland',
        year: '1985',
        cast: ['William Ragsdale', 'Amanda Bearse', 'Chris Sarandon'],
        relatedMovies: [
            {
                title: 'Lost Boys',
                director: 'Joel Schulmacher',
                year: "1987"
            },
            {
                title: 'Near Dark',
                director: 'Kathryn Bigelow',
                year: '1987'
            }
        ]
    },
    {
        title: 'Blue Velvet',
        director: 'David Lynch',
        year: '1986',
        cast: ['Kyle MacLachlan', 'Laura Dern', 'Dennis Hopper'],
        relatedMovies: [
            {
                title: 'Parents',
                director: 'Bob Balaban',
                year: "1989"
            }
        ]
    }
];

/*
Create a function called get80sRelated that takes in one parameter - `array` -
which represents an array of movie objects. This function should return a new
array of only the titles of the relatedMovies that were released in the 80s.

This function must iterate using a for loop or for loops.
*/

/*
I: Function takes in an array of objects.
O: Function returns a new array of strings representing the titles of any
related movie released in the 80s.
C: Must use a for loop.
E: N/A
*/

function get80sRelated(array){
    // create output variable and initialize to an empty array
    var output = [];
    // use a for loop to iterate over input movies array
    for (var i = 0; i < array.length; i++){
        // use a for loop to iterate over relatedMovies
        for (var j = 0; j < array[i].relatedMovies.length; j++){
           // determine if current relatedMovie was released in 80s
           console.log(array[i].relatedMovies[i].year);
           if (array[i].relatedMovies[i].year[2] === '8'){
            output.push(array[i].relatedMovies[j].title);
           }
        }
    }
    // return arary
    return output;
}

console.log(get80sRelated(movies));