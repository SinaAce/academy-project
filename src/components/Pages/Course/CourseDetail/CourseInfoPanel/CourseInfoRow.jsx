const CourseInfoRow = ({ icon, label, value }) => {
  return (
    <div className="flexbetween py-2">
      <div className="basicflex gap-2">
        <img src={icon} alt={label} className="w-8 h-8" />
        <span>{label}</span>
      </div>
      <span>{value}</span>
    </div>
  );
};

export default CourseInfoRow;
