let spec = {
    subtitle: 'This is a subtitle'
};

// Example 1: When spec.subtitle is truthy
if (spec.subtitle) {
    console.log('Subtitle is present:', spec.subtitle);
    // Additional logic can go here
} else {
    console.log('No subtitle provided');
    // Additional default handling can go here
}

// Example 2: When spec.subtitle is falsy
spec.subtitle = ''; // falsy value
if (spec.subtitle) {
    console.log('Subtitle is present:', spec.subtitle);
} else {
    console.log('No subtitle provided');
}
