// Custom debounce function
const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

// Debounced version of handleSelectChange
const debouncedHandleSelectChange = debounce(handleSelectChange, 500); // Adjust the delay as needed

// Use debouncedHandleSelectChange as the event handler
<AssignmentIDPicker
    selectedValue={selectedAssignmentId}
    onChange={debouncedHandleSelectChange}
    style={styles.select}
/>