const Contagion = () => {
  const ContagionItem = [
    {
      img: "assets/airTransmission.png",
      title: "Air Transmission",
      description:
        "Objectively evolve tactical expertise before extensible initiatives.",
    },
    {
      img: "assets/humanContact.png",
      title: "Human Contacts",
      description:
        "Washing your hands is one of the simplest ways you can protect.",
    },
    {
      img: "assets/containedObject.png",
      title: "Human Contacts",
      description:
        "Use the tissue while Sneezing. In this Way, You Can Protect Your Droplets.",
    }
  ];

  return (
    <section className="contagion" id="contagion">
      <div className="info">
        <h4 className="subTitle">Covid-19</h4>
        <h2 className="title">Contagion</h2>
        <p className="description">
          Corona Viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type.
        </p>
      </div>

      <div className="content">
        <div className="virus">
          <img src="assets/virus1.png" alt="" />
        </div>
        <div className="cards">
          {ContagionItem.map((item, index) => {
            return (
              <div className="card" key={index}>
                <img src={item.img} alt="" />
                <div className="text">
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Contagion;
