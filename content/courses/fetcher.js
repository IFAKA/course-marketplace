

import courses from "./index.json"

export const getAllCourses = () => {

  return {
    data: courses,
    courseMap: courses.reduce((acc, currentCourse, i) => {
      acc[currentCourse.id] = currentCourse
      acc[currentCourse.id].index = i
      return acc
    }, {})
  }
}
