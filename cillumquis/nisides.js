/**
 * Format a Date object into a string according to the given format.
 * 
 * @param {Date} date - The date object to format.
 * @param {string} format - The desired format for the date string, e.g., 'YYYY-MM-DD', 'MM/DD/YYYY', etc.
 * @returns {string} The formatted date string.
 * 
 * Example usage:
 * formatDate(new Date(), 'YYYY-MM-DD'); // "2024-06-22"
 */
function formatDate(date, format) {
  const pad = (number) => (number < 10 ? '0' + number : number);

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'DD-MM-YYYY':
      return `${day}-${month}-${year}`;
    default:
      throw new Error('Unsupported format');
  }
}

// Usage example:
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate); // Outputs something like "2024-06-22"
