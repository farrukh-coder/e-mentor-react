import './allTeachers.scss';

import TeacherCard from '../teacherCard/TeacherCard';
import teacherData from "../../helpers/teacherData";


const AllTeachers = () => {
  return (
    <section className="teacher">
      <div className="container">
        <div className="teacher__title">All teachers</div>
        <div className="teacher__gallery">
          {teacherData.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              position={teacher.position}
              img={teacher.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllTeachers;