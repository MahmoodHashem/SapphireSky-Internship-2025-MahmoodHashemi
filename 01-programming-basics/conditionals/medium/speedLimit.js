/* 
 * Speeding Ticket Calculator
 * Speed limit = 60 km/h.
 * If a driver goes above the speed limit, they get a fine.
 * If they are driving over 100 km/h, they get double the fine.
 * Implement a program that takes speed as input and determines the fine.  
*/


function calculateFine(speed) {
   let fine = 0;

   if(speed > 60) {
        fine = 1; 
        if(speed > 100 ){
            fine *= 2
        }
   }

   return fine;
}
