const TeacherCard = ({name, position, img}) => {
  

  return (
    <div className="teacher__gallery-item">
      <div className="teacher__img">
        <img src={img} alt={name} />
      </div>
      <p className="teacher__name">{name}</p>
      <p className="teacher__position">{position}</p>
    </div>
  );
};

export default TeacherCard;
