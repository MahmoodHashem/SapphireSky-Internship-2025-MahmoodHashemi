1. Programming Basics (First 2 Weeks)

<<<<<<< HEAD
JavaScript Fundamentals

=======
## Repository Structure

```

SapphireSky-Internship-2025-MahmoodHashemi/
├─ 01-programming-basics/
│  ├─ arrays/
│  │  └─ easy/
│  ├─ conditionals/
│  │  ├─ easy/
│  │  │  ├─ evenOrOdd.js
│  │  │  ├─ leapYear.js
│  │  │  ├─ minimum.js
│  │  │  └─ score.js
│  │  ├─ hard/
│  │  │  ├─ billCalculator.js
│  │  │  ├─ bmi.js
│  │  │  └─ passStrengthChecker.js
│  │  └─ medium/
│  │     ├─ isTriangle.js
│  │     ├─ speedLimit.js
│  │     └─ withdraw.js
│  ├─ functions/
│  │  ├─ easy/
│  │  │  ├─ 1_cToF.js
│  │  │  ├─ 2_max.js
│  │  │  ├─ 3_evenOrOdd.js
│  │  │  ├─ 4_countVowels.js
│  │  │  └─ 5_reverse.js
│  │  ├─ hard/
│  │  │  ├─ 1_pascalTriangle.js
│  │  │  ├─ 2_binSearch.js
│  │  │  ├─ 3_toBinary.js
│  │  │  ├─ 4_bubbleSort.js
│  │  │  └─ 5_uniqueArr.js
│  │  └─ medium/
│  │     ├─ 1_isPrime.js
│  │     ├─ 2_factorial.js
│  │     ├─ 3_gcd.js
│  │     ├─ 4_fib.js
│  │     └─ 5_isPalindrome.js
│  ├─ fundementals/
│  │  ├─ 01__var-let-const.js
│  │  ├─ 02__evenOrOdd.js
│  │  ├─ 03__equality.js
│  │  ├─ 04__positiveOrNegative.js
│  │  ├─ 05__closures.js
│  │  ├─ 06__factorial.js
│  │  ├─ 07__this.js
│  │  ├─ 08__hoisting.js
│  │  ├─ 09__sumArray.js
│  │  └─ 10__arrowFunctions.js
│  ├─ loops/
│  │  ├─ easy/
│  │  │  ├─ countDigits.js
│  │  │  ├─ multiplicationTable.js
│  │  │  ├─ numbers.js
│  │  │  ├─ reverseNumber.js
│  │  │  └─ sum.js
│  │  ├─ hard/
│  │  │  ├─ armstrongNumber.js
│  │  │  ├─ collatzNumber.js
│  │  │  ├─ gcd.js
│  │  │  ├─ numGuess.js
│  │  │  └─ pyramidPattern.js
│  │  └─ medium/
│  │     ├─ factorial.js
│  │     ├─ fibonacci.js
│  │     ├─ isPrime.js
│  │     ├─ maxmin.js
│  │     └─ palindrome.js
│  └─ switch-cases/
│     ├─ easy/
│     │  ├─ 1_weekDay.js
│     │  ├─ 2_caculator.js
│     │  ├─ 3_trafficLight.js
│     │  ├─ 4_monthName.js
│     │  └─ 5_letterChecker.js
│     └─ medium/
│        ├─ 1_grade.js
│        ├─ 2_currencyConverter.js
│        ├─ 3_atm.js
│        ├─ 4_season.js
│        └─ 5_rockPaperScissors.js
└─ index.html

```

# Programming Basics (First 2 Weeks)

## JavaScript Fundamentals

>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
1. What is the difference between var, let, and const in JavaScript?
2. Write a function to check if a number is even or odd.
3. Explain the difference between == and === in JavaScript.
4. Write a program that takes user input and prints whether it is a positive, negative, or zero.
5. What are JavaScript closures? Provide an example.
6. Write a function that calculates the factorial of a given number.
7. How does this keyword work in JavaScript? Provide an example.
8. Explain the concept of hoisting in JavaScript.
9. Write a function to find the sum of all numbers in an array.
10. What are arrow functions in JavaScript, and how are they different from regular functions?

## 1. If Conditions – Practical Exercises

### Easy

<<<<<<< HEAD
1. Check Odd or Even
   Write a program that takes a number as input and checks if it is odd or even.
2. Grade Calculator
   Given a student's score (0-100), determine their letter grade based on the following scale:
   * 90-100: A
   * 80-89: B
   * 70-79: C
   * 60-69: D
   * Below 60: F
3. Minimum of Two Numbers
   Write a program that takes two numbers as input and prints the smaller number.
4. Leap Year Checker
   A year is a leap year if it is divisible by 4 but not by 100, unless also divisible by 400. Write a program that determines if a given year is a leap year.

### Medium

5. Triangle Validity
   Given three sides of a triangle, check if they form a valid triangle. The sum of any two sides must be greater than the third.
6. Speeding Ticket Calculator
=======
1. **Check Odd or Even**
   * Write a program that takes a number as input and checks if it is odd or even.
2. **Grade Calculator**
   * Given a student's score (0-100), determine their letter grade based on the following scale:
     * 90-100: A
     * 80-89: B
     * 70-79: C
     * 60-69: D
     * Below 60: F
3. **Minimum of Two Numbers**
   * Write a program that takes two numbers as input and prints the smaller number.
4. **Leap Year Checker**
   * A year is a leap year if it is divisible by 4 but not by 100, unless also divisible by 400. Write a program that determines if a given year is a leap year.

### Medium

5. **Triangle Validity**
   Given three sides of a triangle, check if they form a valid triangle. The sum of any two sides must be greater than the third.
6. **Speeding Ticket Calculator**
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
   * Speed limit = 60 km/h.
   * If a driver goes above the speed limit, they get a fine.
   * If they are driving over 100 km/h, they get double the fine.
   * Implement a program that takes speed as input and determines the fine.
<<<<<<< HEAD
7. ATM Withdrawal

* A person wants to withdraw money from an ATM.
* If the withdrawal amount is a multiple of 10, allow withdrawal.
* If not, print an error message.
* If the account balance is less than the withdrawal amount, print "Insufficient Funds".

### Hard

8. Body Mass Index (BMI) Calculator
=======
7. **ATM Withdrawal**
   1. A person wants to withdraw money from an ATM.
      * If the withdrawal amount is a multiple of 10, allow withdrawal.
      * If not, print an error message.
      * If the account balance is less than the withdrawal amount, print "Insufficient Funds".

### Hard

8. **Body Mass Index (BMI) Calculator**

>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
   * Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
   * Categorize it into:
     * Underweight: BMI < 18.5
     * Normal weight: 18.5 ≤ BMI < 25
     * Overweight: 25 ≤ BMI < 30
     * Obese: BMI ≥ 30
<<<<<<< HEAD
9. Electricity Bill Calculator

* Units Consumed:
* Up to 100 units: $0.50 per unit
* 101 to 200 units: $0.75 per unit
* 201 to 500 units: $1.20 per unit
* Above 500 units: $1.50 per unit
* Write a program that calculates the total electricity bill.

8. Password Strength Checker

* A strong password must:
* Be at least 8 characters long.
* Contain at least one uppercase letter, one lowercase letter, and one number.
* Write a program that checks if a given password is strong or weak.
=======
9. **Electricity Bill Calculator**

   * Units Consumed:
   * Up to 100 units: $0.50 per unit
   * 101 to 200 units: $0.75 per unit
   * 201 to 500 units: $1.20 per unit
   * Above 500 units: $1.50 per unit
   * Write a program that calculates the total electricity bill.
10. **Password Strength Checker**

    * A strong password must:
      * Be at least 8 characters long.
      * Contain at least one uppercase letter, one lowercase letter, and one number.
      * Write a program that checks if a given password is strong or weak.

---
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970

## 2. Loops – Practical Exercises

### Easy

<<<<<<< HEAD
1. Print Numbers from 1 to 100
   Write a for loop that prints numbers from 1 to 100.
2. Sum of First N Natural Numbers
   Write a program that takes N as input and calculates the sum of the first N natural numbers.
3. Multiplication Table
   Ask the user for a number and print its multiplication table up to 10.
4. Reverse a Number
   Given an integer, reverse its digits. (Example: 1234 → 4321)
5. Count Digits in a Number
=======
1. **Print Numbers from 1 to 100**
   Write a for loop that prints numbers from 1 to 100.
2. **Sum of First N Natural Numbers**
   Write a program that takes N as input and calculates the sum of the first N natural numbers.
3. **Multiplication Table**
   Ask the user for a number and print its multiplication table up to 10.
4. **Reverse a Number**
   Given an integer, reverse its digits. (Example: 1234 → 4321)
5. **Count Digits in a Number**
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
   Take a number as input and count how many digits it has.

### Medium

<<<<<<< HEAD
6. Check for Prime Number
   Write a program that takes a number as input and checks if it is prime.
7. Factorial of a Number
   Implement a function that calculates the factorial of a number using a loop.
8. Find Largest and Smallest in a List
   Given an array of numbers, find the largest and smallest numbers using a loop.
9. Fibonacci Sequence
   Print the first N Fibonacci numbers using a loop.
10. Palindrome Checker
=======
6. **Check for Prime Number**
   Write a program that takes a number as input and checks if it is prime.
7. **Factorial of a Number**
   Implement a function that calculates the factorial of a number using a loop.
8. **Find Largest and Smallest in a List**
   Given an array of numbers, find the largest and smallest numbers using a loop.
9. **Fibonacci Sequence**
   Print the first N Fibonacci numbers using a loop.
10. **Palindrome Checker**
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
    Write a program that checks if a given number is a palindrome (Example: 121 → True, 123 → False).

### Hard

<<<<<<< HEAD
11. Armstrong Number
    A number is an Armstrong number if the sum of its digits raised to the power of the number of digits equals the number itself.
    Example: 153 = (1³ + 5³ + 3³) = 153
    Write a program that checks if a given number is an Armstrong number.
12. Collatz Sequence (Hailstone Numbers)
=======
11. **Armstrong Number**
    A number is an Armstrong number if the sum of its digits raised to the power of the number of digits equals the number itself.
    Example: 153 = (1³ + 5³ + 3³) = 153
    Write a program that checks if a given number is an Armstrong number.
12. **Collatz Sequence (Hailstone Numbers)**

>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
    * Take a number n.
    * If n is even, divide it by 2.
    * If n is odd, multiply it by 3 and add 1.
    * Repeat this process until n = 1.
    * Count how many steps it takes to reach 1.
<<<<<<< HEAD
13. Find GCD (Greatest Common Divisor)

* Given two numbers, find their GCD using a loop.

11. Pattern Printing - Pyramid
    Write a program that prints this pattern for N = 5:
12. Number Guessing Game

- The program randomly selects a number between 1 and 100.
- The user must guess the number.
- The program gives hints like "Too High" or "Too Low".
- The loop continues until the user guesses correctly.
=======
13. **Find GCD (Greatest Common Divisor)**

    * Given two numbers, find their GCD using a loop.
14. **Pattern Printing - Pyramid**
    Write a program that prints this pattern for N = 5:

    ```
       *  
      ***  
     *****  
    *******  

    ```


17. **Number Guessing Game**

    * The program randomly selects a number between 1 and 100.
      * The user must guess the number.
      * The program gives hints like "Too High" or "Too Low".
      * The loop continues until the user guesses correctly.
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970

## 3. Functions – Practical Exercises

### Easy

<<<<<<< HEAD
1. Convert Celsius to Fahrenheit
   Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:

F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59)+32

2. Find the Maximum of Three Numbers
   Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.
3. Check Even or Odd
   Create a function isEven(number) that returns true if the number is even and false otherwise.
4. Count Vowels in a String
   Write a function countVowels(str) that takes a string and returns the number of vowels in it.
5. Reverse a String
=======
1. **Convert Celsius to Fahrenheit**
   Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula: F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59)+32
2. **Find the Maximum of Three Numbers**
   Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.
3. **Check Even or Odd**
   Create a function isEven(number) that returns true if the number is even and false otherwise.
4. **Count Vowels in a String**
   Write a function countVowels(str) that takes a string and returns the number of vowels in it.
5. **Reverse a String**
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
   Implement reverseString(str), which takes a string and returns it reversed.
   Example: "hello" → "olleh"

### Medium

<<<<<<< HEAD
6. Check if a Number is Prime
   Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
7. Calculate Factorial Using Recursion
   Implement factorial(n), which calculates the factorial of n using recursion.
8. Find the GCD of Two Numbers
   Write a function gcd(a, b) that finds the Greatest Common Divisor (GCD) using the Euclidean algorithm.
9. Find the nth Fibonacci Number
   Implement fibonacci(n), which returns the nth Fibonacci number.
10. Check if a String is a Palindrome
=======
6. **Check if a Number is Prime**
   Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
7. **Calculate Factorial Using Recursion**
   Implement factorial(n), which calculates the factorial of n using recursion.
8. **Find the GCD of Two Numbers**
   Write a function gcd(a, b) that finds the Greatest Common Divisor (GCD) using the Euclidean algorithm.
9. **Find the nth Fibonacci Number**
   Implement fibonacci(n), which returns the nth Fibonacci number.
10. **Check if a String is a Palindrome**
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
    Write a function isPalindrome(str) that returns true if the given string is a palindrome.
    Example: "racecar" → true, "hello" → false

### Hard

<<<<<<< HEAD
11. Generate Pascal’s Triangle
    Implement pascalTriangle(rows), which prints Pascal’s Triangle up to rows rows.
12. Binary Search Algorithm
    Write a function binarySearch(arr, target) that performs a binary search on a sorted array.
13. Convert Decimal to Binary
    Implement decimalToBinary(n), which converts a decimal number to its binary equivalent.
14. Sorting an Array Using Bubble Sort
    Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm.
15. Find Unique Elements in an Array
=======
11. **Generate Pascal’s Triangle**
    Implement pascalTriangle(rows), which prints Pascal’s Triangle up to rows rows.
12. **Binary Search Algorithm**
    Write a function binarySearch(arr, target) that performs a binary search on a sorted array.
13. **Convert Decimal to Binary**
    Implement decimalToBinary(n), which converts a decimal number to its binary equivalent.
14. **Sorting an Array Using Bubble Sort**
    Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm.
15. **Find Unique Elements in an Array**
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
    Create findUnique(arr), which returns an array with only the unique elements from the input array.
    Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]

---

## 4. Switch-Case – Practical Exercises

### Easy

<<<<<<< HEAD
1. Day of the Week
=======
1. **Day of the Week**

>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970
   * Write a program that takes an integer (1-7) as input.
   * Use switch to print the corresponding day of the week.
     * 1 → "Monday"
     * 2 → "Tuesday"
     * ...
     * 7 → "Sunday"
<<<<<<< HEAD
2. Simple Calculator

* Take two numbers and an operator (+, -, *, /).
* Use switch to perform the correct operation and return the result.

1. Traffic Light System

* Take a traffic light color ("red", "yellow", "green") as input.
* Use switch to print the corresponding action:
* "Red" → "Stop"
* "Yellow" → "Slow Down"
* "Green" → "Go"

1. Month Name and Days

* Input a number (1-12) representing a month.
* Use switch to print the name of the month and how many days it has.

1. Check for Vowel or Consonant

* Take a letter as input.
* Use switch to determine whether it is a vowel or a consonant.

### Medium

6. Student Grade System
   * Take a student's score (0-100).
   * Use switch to assign a letter grade (A, B, C, D, F).
7. Currency Converter

* Take a currency code ("USD", "EUR", "INR", "JPY").
* Use switch to print the conversion rate relative to a base currency (e.g., USD).

6. Menu-Based ATM System

* Display a menu with options:
* 1 → Check Balance
* 2 → Withdraw Money
* 3 → Deposit Money
* 4 → Exit
* Use switch to perform the correct action based on the user’s choice.

6. Determine Season by Month

* Take an integer (1-12) as input.
* Use switch to print the corresponding season:
* 12, 1, 2 → Winter
* 3, 4, 5 → Spring
* 6, 7, 8 → Summer
* 9, 10, 11 → Fall

6. Rock, Paper, Scissors Game

* The user inputs "rock", "paper", or "scissors".
* The computer randomly selects one.
* Use switch to determine the winner.

### Hard

11. Roman Numeral Converter
    * Take an integer (1-10) as input.
    * Use switch to print the corresponding Roman numeral.
12. Zodiac Sign Finder

* Take a birth month and day.
* Use switch to determine the person's zodiac sign.

11. Discount System Based on Membership

* Input membership type ("Gold", "Silver", "Bronze").
* Use switch to apply different discount rates on a purchase.

11. Automated Toll Booth System

* Take a vehicle type ("Car", "Truck", "Bike") as input.
* Use switch to determine the toll fee.

11. Music Playlist Controller

* Take a command ("Play", "Pause", "Next", "Previous").
* Use switch to perform the correct action.
=======
2. **Simple Calculator**

   * Take two numbers and an operator (+, -, *, /).
   * Use switch to perform the correct operation and return the result.
3. **Traffic Light System**

   * Take a traffic light color ("red", "yellow", "green") as input.
   * Use switch to print the corresponding action:
     * "Red" → "Stop"
     * "Yellow" → "Slow Down"
     * "Green" → "Go"
4. **Month Name and Days**

   * Input a number (1-12) representing a month.
   * Use switch to print the name of the month and how many days it has.
5. **Check for Vowel or Consonant**

   * Take a letter as input.
   * Use switch to determine whether it is a vowel or a consonant.

### Medium

6. **Student Grade System**

   * Take a student's score (0-100).
   * Use switch to assign a letter grade (A, B, C, D, F).
7. **Currency Converter**

   * Take a currency code ("USD", "EUR", "INR", "JPY").
   * Use switch to print the conversion rate relative to a base currency (e.g., USD).
8. **Menu-Based ATM System**

   * Display a menu with options:
     * 1 → Check Balance
     * 2 → Withdraw Money
     * 3 → Deposit Money
     * 4 → Exit
   * Use switch to perform the correct action based on the user’s choice.
9. **Determine Season by Month**

   * Take an integer (1-12) as input.
   * Use switch to print the corresponding season:
     * 12, 1, 2 → Winter
     * 3, 4, 5 → Spring
     * 6, 7, 8 → Summer
     * 9, 10, 11 → Fall
10. **Rock, Paper, Scissors Game**

    * The user inputs "rock", "paper", or "scissors".
    * The computer randomly selects one.
    * Use switch to determine the winner.

### Hard

11. **Roman Numeral Converter**

    * Take an integer (1-10) as input.
    * Use switch to print the corresponding Roman numeral.
12. **Zodiac Sign Finder**

    * Take a birth month and day.
    * Use switch to determine the person's zodiac sign.
13. **Discount System Based on Membership**

    * Input membership type ("Gold", "Silver", "Bronze").
    * Use switch to apply different discount rates on a purchase.
14. **Automated Toll Booth System**

    * Take a vehicle type ("Car", "Truck", "Bike") as input.
    * Use switch to determine the toll fee.
15. **Music Playlist Controller**

    * Take a command ("Play", "Pause", "Next", "Previous").
    * Use switch to perform the correct action.
>>>>>>> de201cb60ff80376cea85b7b1171a4739b4d7970

---

## Bonus Challenge: Nested Loops

1. Print Prime Numbers from 1 to 100
   Use a loop inside another loop to check for prime numbers in a range.
2. Pascal’s Triangle
   Generate Pascal’s Triangle up to N rows.
3. Matrix Multiplication
   Given two matrices, multiply them using nested loops.

---

2. Object-Oriented Programming (OOP)
3. What are the four pillars of Object-Oriented Programming?
4. Define and provide an example of encapsulation in JavaScript.
5. How do JavaScript classes differ from traditional classes in languages like Java or C++?
6. Write a class Car with properties brand, model, and a method displayInfo().
7. Explain prototype-based inheritance in JavaScript.
8. How do you create a private property in a JavaScript class?
9. What is method overriding, and how can it be implemented in JavaScript?
10. Write an example demonstrating polymorphism in JavaScript.
11. What is the purpose of super() in JavaScript classes?
12. Explain the difference between composition and inheritance.

---

3. Debugging
4. What are the different types of errors in JavaScript?
5. How can you debug a JavaScript program in the browser?
6. What is the use of console.log(), and how can it help in debugging?
7. Explain the purpose of try...catch in JavaScript.
8. How do breakpoints help in debugging JavaScript code?
9. What is the difference between throw and console.error()?
10. Write a program that intentionally throws an error and catches it using try...catch.
11. How can debugger be used in JavaScript?
12. What is stack trace, and how can it help in debugging?
13. What are some best practices for writing bug-free JavaScript code?

---

4. Data Structures (Next 2 Weeks)

## 1. Arrays

### Simple

1. Write a function to find the largest element in an array.
2. Write a function to find the sum of all elements in an array.
3. How do you check if an array contains a specific element?
4. Write a function to count the occurrences of a specific element in an array.
5. Implement a function to find the smallest number in an array.

### Medium

6. Write a function to reverse an array without using the built-in reverse() method.
7. How do you merge two sorted arrays into one sorted array?
8. Implement a function that rotates an array k times to the right.
9. Write a function to find the second largest number in an array.
10. Implement a function that finds the intersection of two arrays.

### Hard

11. How do you remove duplicates from an array efficiently?
12. Write a function to find the missing number in an array of 1 to N.
13. How do you check if two arrays are equal?
14. Implement a function to find the subarray with the maximum sum (Kadane’s Algorithm).
15. Write a function to rearrange an array such that even numbers appear before odd numbers.

---

## 2. Strings

### Simple

1. Write a function to check if a string is a palindrome.
2. How do you count the number of vowels in a string?
3. Write a function to reverse a string.
4. How do you remove spaces from a given string?
5. Write a function to capitalize the first letter of each word in a string.

### Medium

6. How can you find the first non-repeating character in a string?
7. Write a function to check if two strings are anagrams.
8. Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").
9. How do you check if one string is a rotation of another string?
10. Write a function to check if a string contains only unique characters.

### Hard

11. Implement a function to find the longest palindrome substring in a string.
12. Write a function to find all permutations of a given string.
13. Implement a function to count the number of occurrences of each character in a string.
14. How do you check if a string follows a given pattern (e.g., "abba" follows "dog cat cat dog")?
15. Implement a function to convert a given sentence into its abbreviation ("I am learning JavaScript" → "I a l J").

---

## 3. Linked Lists

### Simple

1. What is a linked list, and how does it differ from an array?
2. Implement a function to insert a node at the beginning of a linked list.
3. How do you delete a node from a linked list?
4. Write a function to traverse and print a linked list.
5. Implement a function to find the length of a linked list.

### Medium

6. Write a function to find the middle node of a linked list.
7. Implement a function to reverse a linked list.
8. How do you detect a cycle in a linked list?
9. Write a function to merge two sorted linked lists.
10. How do you find the nth node from the end of a linked list?

### Hard

11. Implement a function to remove duplicates from a linked list.
12. How do you check if two linked lists intersect?
13. Write a function to find the starting point of a cycle in a linked list.
14. Implement a function to group even and odd nodes together in a linked list.
15. Write a function to add two numbers represented as linked lists.

---

## 4. Stacks

### Simple

1. What is a stack, and how does it follow the LIFO principle?
2. Implement a stack using an array in JavaScript.
3. How do you implement a stack using a linked list?
4. Explain the purpose of push() and pop() in a stack.
5. Write a function to check if a given string has balanced parentheses.

### Medium

6. Implement a function to reverse a string using a stack.
7. How do you implement a stack with two queues?
8. Write a function to evaluate a postfix expression using a stack.
9. Implement a function to find the minimum element in a stack in constant time.
10. Write a function to sort a stack using recursion.

### Hard

11. How do you design a stack that supports push(), pop(), and getMin() in constant time?
12. Implement an LRU (Least Recently Used) cache using a stack.
13. How do you implement a stack using only one queue?
14. Write a function to check if a given arithmetic expression is valid.
15. Implement a function to convert an infix expression to postfix notation.

---

## 5. Queues

### Simple

1. What is a queue, and how does it follow the FIFO principle?
2. Implement a queue using an array in JavaScript.
3. How do you implement a queue using a linked list?
4. What is the difference between a queue and a stack?
5. Write a function to check if a queue is empty.

### Medium

6. Implement a function to reverse a queue.
7. How do you implement a queue using two stacks?
8. Explain priority queues and their applications.
9. Implement a circular queue and explain how it works.
10. Implement a function to merge two queues in an alternating manner.

### Hard

11. How do you design a queue that supports enqueue(), dequeue(), and getMin() in constant time?
12. Implement a function to find the first non-repeating character in a stream of characters using a queue.
13. How do you implement a multi-level queue with different priorities?
14. Write a function to simulate a printer queue with different priorities.
15. Implement a function to process tasks in batches using a queue.

---

## 6. Sorting Algorithms

### Simple

1. Implement the Bubble Sort algorithm.
2. How does Selection Sort work? Implement it.
3. Implement the Insertion Sort algorithm.
4. Compare the time complexities of different sorting algorithms.
5. Write a function to sort an array of numbers in descending order.

### Medium

6. Implement Merge Sort and explain its time complexity.
7. Implement Quick Sort and explain how pivot selection affects performance.
8. Write a function to perform Counting Sort.
9. How can you sort an array of 0s, 1s, and 2s without extra space?
10. Implement a function to find the Kth largest element in an array using sorting.

### Hard

11. Implement Heap Sort and explain its working.
12. Write a function to sort an array using Radix Sort.
13. How do you sort an array of strings based on their lengths?
14. Implement Bucket Sort and explain its applications.
15. Write a function to find the smallest missing positive integer using sorting.

---

## 7. Searching Algorithms

### Simple

1. Implement Linear Search on an array.
2. Implement Binary Search on a sorted array.
3. What is the time complexity of Binary Search?
4. Write a function to find the first occurrence of an element in a sorted array.
5. Write a function to check if a given number exists in a matrix.

### Medium

6. Implement a function to find the peak element in an array.
7. How does Interpolation Search work? Implement it.
8. Write a function to search for a word in a 2D grid.
9. Implement an algorithm to find the square root of a number using Binary Search.
10. Implement Ternary Search and compare it with Binary Search.

### Hard

11. Write a function to find the smallest missing positive integer in an array.
12. Implement Exponential Search and explain its use cases.
13. Implement Jump Search and compare it with Binary Search.
14. Implement a function to find duplicate elements in an array using a search method.
15. How do you efficiently find the median of two sorted arrays?

**

```

```
