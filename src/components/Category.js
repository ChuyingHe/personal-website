const Category = (data) => {
  return (
    <div>
      {console.log(data.data)}
      <h3>{data.data.name}</h3>
      {data.data.list.map((item) => {
        return (
          <>
            {item.title && (
              <>
                Title: {item.title} <br />
              </>
            )}

            {item.company && (
              <>
                Company: {item.company} <br />
              </>
            )}
            {item.location && (
              <>
                Location: {item.location} <br />
              </>
            )}
            {item.time_start && (
              <>
                Time: {item.time_start} ~ {item.time_end} <br />{" "}
              </>
            )}
            {item.description && (
              <>
                Description: {item.description} <br />
              </>
            )}
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Category;
