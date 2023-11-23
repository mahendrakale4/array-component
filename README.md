# Array Manipulation React Component

This React component provides a set of functionalities to manipulate an array. The initial array is set to `["A", "B", "C"]`, and various operations can be performed on it using the provided buttons.

## Usage

### Installation

```bash
npm install
```

Running the Application
```bash
npm start
```

This will start the development server, and you can view the application in your browser at LocalHost

# Functionalities
### 1. Remove 1st Element
Removes the first element from the array.
<button onClick={RemoveFirstElement}>Remove 1st element</button>

### 2. Remove Specific Letter
Removes all occurrences of a specific letter from the array.
```bash
<button onClick={() => RemoveSpecifLetter("B")}>Remove all B's</button>
```

### 3. Add to Start
Adds a new element to the start of the array.
```bash
<button onClick={() => AddtoStart("A")}>Add to Start</button>
```

### 4. Add to End
Adds a new element to the end of the array.
```bash
<button onClick={() => AddtoEnd("A")}>Add to end</button>
```


### 5. Add Letter to Index
Adds a letter at a specific index in the array.
```bash
<button onClick={() => AddlettertoIndex(" Q", 2)}>Add letter Q to Index 2</button>
```


### 6. Clear
Clears the entire array.
```bash
<button onClick={clear}>Clear</button>
```

### 7. Reset
Resets the array to the initial value.
```bash
<button onClick={reset}>Reset</button>
```

### 8. Update A to H
Updates all occurrences of "A" to "H" in the array.
```bash
<button onClick={Update}>Update A to H</button>
```

### 9. Update Input
Adds the value from the input field to the array.
```bash
<input value={value} onChange={(e) => setvalue(e.target.value)} />
```
```bash
<button onClick={() => updateinput(value)}>Update</button>
```

### 10. Display Array
Displays the current state of the array.
```bash
{array.join(" , ")}
```
