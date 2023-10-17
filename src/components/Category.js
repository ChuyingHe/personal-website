import "./Category.scss";

const Category = (category) => {
  const data = category.category;

  return (
    <div>
      <h3>{data.name}</h3>
      {console.log(data)}
      {data.list.map((item) => {
        return (
          <div className="organisation-item">
            <strong>{item.organisation}</strong>
            <div className="organisation-location">
              {item.location && <div>{item.location}</div>}
            </div>
            {/* calculated duration */}
            {item.experiences.map((exp) => {
              return (
                <div className="experience-item">
                  <strong>{exp.title}</strong>
                  {exp.department && <div>{exp.department}</div>}
                  <div className="experience-time">
                    {exp.time_start} - {exp.time_end}
                  </div>
                  <div className="experience-description">
                    {exp.description}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
