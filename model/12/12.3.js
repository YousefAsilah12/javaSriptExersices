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

school.findPerson = (type, id) => {
  if (type === "teachers") {
    return school.teachers.find(val => val.id === id);

  } else if (type === "students") {
    return school.students.find(val => val.id === id);

  }
  return;


}



school.assignStudent = (studentId, subject) => {
  const student = school.students.find(student => student.id === studentId);
  if (!student) return;
  const teacher = school.teachers.find(teacher => teacher.subjects.includes(subject) && teacher.capacityLeft > 0);
  if (teacher) {
    teacher.students.push(student);
    teacher.capacityLeft--;
    console.log('STUDENTS WITH TEACHER', teacher.students);
  } else {
    console.log("Sorry, no available teachers left");
  }
}

school.assignTeachersSubject = (teacherId, newSubject) => {
  const teacher = school.teachers.find(teacher => teacher.id === teacherId);
  if (!teacher) {
    return;
  }
  if (!teacher.subjects.includes(newSubject)) {
    teacher.subjects.push(newSubject);
  }
}

//  i chosse to remove student that is the last parst of the question
school.removeStudent = (studentId) => {
  const index = school.students.findIndex(student => student.id === studentId);
  if(index !== -1) {
    school.students.splice(index, 1);
  }
}






console.log(school.findPerson("students", 10));
school.assignStudent(10, "history");
school.assignStudent( "history");
school.assignStudent( 10);