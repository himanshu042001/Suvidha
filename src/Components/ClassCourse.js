import React from "react";
import {Link} from 'react-router-dom'
import '../cc.css';
function ClassCourse() {
  return <div>
      <div className="ccflx">
          <Link to="/Classes" className="course-cards course-cards-title"><i class="fas fa-users-class"></i>Class</Link>
          <Link to="/Course" className="course-cards course-cards-title"><i class="fas fa-book-open"></i>Course</Link>
        </div>
  </div>;
}

export default ClassCourse;
