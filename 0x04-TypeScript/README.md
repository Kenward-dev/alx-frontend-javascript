# Teacher Interface (TypeScript)

## Description
This project defines a `Teacher` interface in TypeScript with required, optional, and read-only attributes.  
It demonstrates how to use `readonly` properties, optional properties, and index signatures to allow extra attributes.

## Project Structure
```

task\_1/
│── package.json
│── tsconfig.json
│── webpack.config.js
│── main.ts
│── dist/
│   └── bundle.js (generated after build)

````

## Teacher Interface Requirements
- `firstName` (`string`) → **read-only** (can only be set at initialization)  
- `lastName` (`string`) → **read-only** (can only be set at initialization)  
- `fullTimeEmployee` (`boolean`) → **must always be defined**  
- `yearsOfExperience` (`number`) → **optional**  
- `location` (`string`) → **must always be defined**  
- Any extra attributes (e.g. `contract: boolean`) → allowed via index signature  

## Example
```ts
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Lagos",
  contract: true, // extra property allowed
};
````

## Setup & Installation

1. Navigate to the project directory:

   ```bash
   cd task_1
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project

* Build the project with Webpack:

  ```bash
  npm run build
  ```

  You should see:

  ```
  No type errors found.
  ```

* Open `index.html` in your browser and check the console for logged teacher objects.

## Requirements Met

* `firstName` and `lastName` are **read-only**
* `fullTimeEmployee` and `location` are **required**
* `yearsOfExperience` is **optional**
* Additional attributes (e.g. `contract`) are allowed
* Webpack build succeeds with **no type errors**

```

