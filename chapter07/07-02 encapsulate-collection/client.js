// 리팩터링 전
numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map((name) => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
  aPerson.courses.push(new Course(name, false));
}

// 리팩터링 후
for (const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}
