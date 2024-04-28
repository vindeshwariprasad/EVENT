import React from 'react'

const Service = () => {
    const services = [
        {
          id: 1,
          url: "/BIRTHDAY.png",
          title: "Birthday Planning",
        },
        {
          id: 2,
          url: "/ANNIVERSY24.png",
          title: "Anniversary Planning",
        },
        {
          id: 3,
          url: "/CAMPING.png",
          title: "Camping Trip Planning",
        },
        {
          id: 4,
          url: "/GAMENIGHT.png",
          title: "Game Night Planning",
        },
        {
          id: 5,
          url: "/PARTY.png",
          title: "Party Planning",
        },
        {
          id: 6,
          url: "/WEEDING.png",
          title: "Wedding Planning",
        },
      ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Service