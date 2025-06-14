const CourseImage = ({ courseDetail }) => {
  return (
    <div className="w-2/3 h-[630px]">
      <img
        src={courseDetail?.imageAddress}
        alt={courseDetail?.title}
        className="w-10/12 h-[500px] rounded-3xl m-auto"
      />
    </div>
  );
};

export default CourseImage;
