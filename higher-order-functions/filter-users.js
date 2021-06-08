const allUsers = [
  { 
    "id": "268",
    "role": "admin",
    "firstName": "Adri",
    "lastName": "Ardila",
    "birthDateDay": "03",
    "birthDateYear": "2020",
    "birthDateMonth": "05"
  },
  {
    "id": "98",
    "role": "student",
    "firstName": "Adriana",
    "lastName": "Ardila",
    "birthDateDay": "01",
    "birthDateYear": "2020",
    "birthDateMonth": "01"
  },
  {
    "id": "227",
    "role": "student",
    "firstName": "Alejandra Julieth",
    "lastName": " Medina Matute",
    "birthDateDay": "05",
    "birthDateYear": "2009",
    "birthDateMonth": "05"
  },
  {
    "id": "153",
    "role": "student",
    "firstName": "Amanda Catalina",
    "lastName": " Meza Torres",
    "birthDateDay": "07",
    "birthDateYear": "2012",
    "birthDateMonth": "10"
  },
  {
    "id": "230",
    "role": "student",
    "firstName": "Amanda Sofia",
    "lastName": " Cardona Zelaya",
    "birthDateDay": "02",
    "birthDateYear": "2008",
    "birthDateMonth": "06"
  },
  {
    "id": "108",
    "role": "teacher",
    "firstName": "Andrea",
    "lastName": "Andrade Juárez",
    "birthDateDay": "19",
    "birthDateYear": "1982",
    "birthDateMonth": "10"
  },
  {
    "id": "493",
    "role": "student",
    "firstName": "Roger",
    "lastName": "Castro",
    "birthDateDay": "19",
    "birthDateYear": "2021",
    "birthDateMonth": "10"
  },
  {
    "id": "490",
    "role": "student",
    "firstName": "Kai",
    "lastName": "Sarmiento",
    "birthDateDay": "19",
    "birthDateYear": "2004",
    "birthDateMonth": "10"
  }
];

const students = allUsers.filter(user => user.role === "student");
const teachers = allUsers.filter(user => user.role === "teacher");



const newBorns = students.filter(date => date.birthDateYear >= "2020");
console.log(newBorns);