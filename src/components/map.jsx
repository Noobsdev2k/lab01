const Map = () => {
  const mapItems = [
    {
      title: "India",
      img: "assets/india.png",
      number: "100,392",
    },
    {
      title: "USA",
      img: "assets/united-states.png",
      number: "81,340",
    },
    {
      title: "Italy",
      img: "assets/italy.png",
      number: "64,049",
    },
    {
      title: "China",
      img: "assets/china.png",
      number: "50,871s",
    },
    {
      title: "Canada",
      img: "assets/canada.png",
      number: "86,498",
    },
    {
      title: "UK",
      img: "assets/united-kingdom.png",
      number: "32,332",
    },
  ];
  return (
    <section className="map">
      <div className="image-container">
        <div className="image">
          <img src="assets/map.png" alt="" />
        </div>
        <div className="map-search">
          <i className="fas fa-search"></i>
        </div>
        <div className="map-options">
          <i className="fas fa-plus"></i>
          <i className="fas fa-minus"></i>
          <div className="arrows">
            <i className="fas fa-sort-up"></i>
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
      <div className="reports">
        <div className="title-container">
          <h2 className="title">Live Reports</h2>
          <div className="arrows"></div>
        </div>
        <div className="report-container">
          {mapItems.map((item, index) => {
            return (
              <div className="report" key={index}>
                <div className="country">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <div className="numbers">
                  <h4>{item.number}</h4>
                  <i className="fas fa-sort-up"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Map;
