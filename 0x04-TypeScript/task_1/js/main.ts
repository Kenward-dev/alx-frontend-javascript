interface Teacher {
  readonly firstName: string;      
  readonly lastName: string;       
  fullTimeEmployee: boolean;       
  yearsOfExperience?: number;      
  location: string;                
  [key: string]: any;              
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Lagos",
  contract: true, 
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Abuja",
  yearsOfExperience: 5,
};

console.log(teacher1);
console.log(teacher2);
