import cat1 from '../images/cat1.jpg' ; 
import cat2 from '../images/cat2.jpg' ; 
import cat3 from '../images/cat3.jpg' ; 
import cat4 from '../images/cat4.jpg' ; 
import cat5 from '../images/cat5.jpg' ; 
import cat6 from '../images/cat6.jpg' ; 
import cat7 from '../images/cat7.jpg' ;
import cat8 from '../images/cat8.jpg' ; 


export const categories = [
    { 
        id: 1 , 
        image : cat1, 
        name: "Men's Jackets", 
        cat : [ "jackets","mjackets"] ,
    },
    { 
       id: 2 , 
       image :cat2, 
       name: "Women's Sweatshirts",
       cat : ["sweatshirt","wsweatshirts"]
   },
   { 
       id: 3 , 
       image : cat3, 
       name: "Women's Sweaters",
       cat : [ "sweaters" , "wsweaters" , ] 
   },
   { 
       id: 4 , 
       image : cat4, 
       name: "Men's Sweatshirts",
       cat : ["sweatshirt", 'msweatshirts' ], 
   },{ 
       id: 5 , 
       image : cat5, 
       name: "Dresses",
       cat : ["dresses", 'wdresses']
   },
   { 
       id: 6 , 
       image : cat6, 
       name: "Casual Shirts", 
       cat : ["shirts", "mcasualshirts"]
   },
   { 
       id: 7, 
       image : cat7, 
       name: "Modern Kurtas",
       cat : ["kurtas", "wkurtas"]
   },{ 
       id: 8 , 
       image : cat8, 
       name: "Jeans", 
       cat : ["jeans", "mjeans"], 
   }
   ]
