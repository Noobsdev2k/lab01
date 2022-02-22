const Solutions = () => {
  const solutionItems = {
    subTitle: "Covid-19",
    title: "What Should We Do",
    description:
      "Corona Viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type.",
    content: [
      {
        round: "01",
        title: "Wear Masks",
        description:
          'Continually seize impactful vitals rather than future-proofsupply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.',
        img: "assets/girl1.png",
      },
      {
        round: "02",
        title: "Wash your hands",
        description:' Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.',
         img: "assets/girl2.png",
      },
      {
        round: "03",
        title: "Use Nose - Rag",
        description:' Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.',
        img: "assets/girl3.png",
      },
      {
        round: "04",
        title: "Avoid Contacts",
        description:'Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.',
         
        img: "assets/girl4.png"
      },
    ],
  };
  return (
    <section className="solutions" id="solution">
      <div className="virus">
        <img src="assets/virus3.png" alt="" />
      </div>
      <div className="virus2">
        <img src="assets/virus1.png" alt="" />
      </div>
      <div className="virus3">
        <img src="assets/virus4.png" alt="" />
      </div>

      <div className="info">
        <h4 className="subTitle">{solutionItems.subTitle}</h4>
        <h2 className="title">
          {solutionItems.title} <span>?</span>
        </h2>
        <p className="description">{solutionItems.description}</p>
      </div>
      <div className="content">
{solutionItems.content.map((item, index) =>{
    return(
        <div className="solution" key={index}>
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="solution-info">
          <div className="round">{item.round}</div>
          <div className="info-container">
            <h2 className="title">{item.title}</h2>
            <p className="description">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    )
})}
       
      </div>
    </section>
  );
};

export default Solutions;
