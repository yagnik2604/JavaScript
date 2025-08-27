const course ={
     coursename : " js in hindi",
     price: 999,
     courseInstructor :"hitesh"
}

//course.courseInstructor

//const {courseInstructor} = course
const {courseInstructor : instructor} = course
console.log(instructor);