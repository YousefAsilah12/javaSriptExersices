const school = {
  teachers: [{
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [{
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

function findPerson(type, id) {
  if (type === "teachers") {
    return school.teachers.find(val => val.id === id);

  } else if (type === "students") {
    return school.students.find(val => val.id === id);

  }
  return;


}



function assignStudent(id,subjcet){

  let student = findPerson("students", id);
  let teacher= school.teachers.subjects.find(val => val.subject === subjcet.subject);
  if(teacher && teacher.capacityLeft>0){
    teacher.students.push(student);
    capacityLeft--;
    console.log(`student ${student.name } has added to teacher : ${teacher.name} with subject${subjcet}`);
  }
  else{
    console.log("sorry no available teachers left");
  }
}









console.log(findPerson("students", 10));
console.log(assignStudent( 10,"history"));
