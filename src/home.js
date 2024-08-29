import React from "react";
import "./page.css";

function Home() {
  return (
    <div className="container">
      <h2>HOME PAGE</h2>
      <div className="home-image">
        <img
          src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sky-image"
          width="500px"
          height="250px"
        />
      </div>
      <div className="home-para">
        <p>
          The sky is an unobstructed view upward from the surface of the Earth.
          It includes the atmosphere and outer space. It may also be considered
          a place between the ground and outer space, thus distinct from outer
          space. In the field of astronomy, the sky is also called the celestial
          sphere. This is an abstract sphere, concentric to the Earth, on which
          the Sun, Moon, planets, and stars appear to be drifting. The celestial
          sphere is conventionally divided into designated areas called
          constellations. Usually, the term sky informally refers to a
          perspective from the Earth's surface; however, the meaning and usage
          can vary. An observer on the surface of the Earth can see a small part
          of the sky, which resembles a dome (sometimes called the sky bowl)
          appearing flatter during the day than at night. In some cases, such as
          in discussing the weather, the sky refers to only the lower, denser
          layers of the atmosphere. The daytime sky appears blue because air
          molecules scatter shorter wavelengths of sunlight more than longer
          ones (redder light). The night sky appears to be a mostly dark surface
          or region spangled with stars. The Sun and sometimes the Moon are
          visible in the daytime sky unless obscured by clouds. At night, the
          Moon, planets, and stars are similarly visible in the sky.
        </p>
      </div>
    </div>
  );
}

export default Home;
