// --- DOM Element Selection ---
const input1 = document.getElementById('num1'); // First input box
const input2 = document.getElementById('num2'); // Second input box
const messageDiv = document.getElementById("message"); // Output for odd/even check
const rangeDiv = document.getElementById("range-results"); // Output for range results
const calculateButton = document.getElementById('calculateBtn'); // Button to trigger calculation


// --- Functions ---
// Part 1: Check if numbers are odd/even and return a message string.
const check_odd_even = (num1, num2) => {
    const result1 = num1 % 2 === 0 ? "even" : "odd"; // Check first number
    const result2 = num2 % 2 === 0 ? "even" : "odd"; // Check second number
    const messageText = `First number (${num1}) is ${result1}, and the second number (${num2}) is ${result2}.`;
    console.log(messageText);
    return messageText;
};

// Part 2: Generate a range of numbers and return HTML with results.
const range = (start, end) => {
    // Swap values if start is bigger than end
    if (start > end) {
        [start, end] = [end, start];
    }
    const totalCount = end - start + 1;
    const numbersInRange = [];

    // First loop: populate array with numbers
    for (let i = start; i <= end; i++) {
        numbersInRange.push(i);
        console.log(`for is processing: ${i}`); // Log each number during for loop
    }

    // Second loop: log each number for clarity
    numbersInRange.forEach(number => {
        console.log(`forEach is processing: ${number}`); // Log each number during forEach loop
    });

    // Prepare HTML for display
    const horizontalList = numbersInRange.join(', ');
    const listOutput = `<p>Numbers in Range:<br>${horizontalList}</p>`;
    const countOutput = `<p>Total Items in Range: ${totalCount}</p>`;
    return listOutput + countOutput;
};

// Part 3: Main function to validate input and update DOM.
const calculate = () => {
    const a = parseInt(input1.value, 10); // Convert first input to number
    const b = parseInt(input2.value, 10); // Convert second input to number

    // Check for invalid input
    if (isNaN(a) || isNaN(b)) {
        const errorMessage = "Invalid input. Please enter a number in both text boxes.";
        console.error(errorMessage);
        messageDiv.innerHTML = errorMessage; // Show error in DOM
        messageDiv.style.color = 'red';
        rangeDiv.innerHTML = ""; // Clear range results
        return;
    }

    messageDiv.style.color = 'black'; // Reset text color if valid

    // Run calculations and update DOM with results
    const oddEvenResultText = check_odd_even(a, b);
    const rangeResultText = range(a, b);
    messageDiv.innerHTML = oddEvenResultText;
    rangeDiv.innerHTML = rangeResultText;
};

// --- Entry Point ---
// Attach the calculate function to the button click event.
calculateButton.addEventListener('click', calculate);
