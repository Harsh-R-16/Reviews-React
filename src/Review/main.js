import { person } from "./data";
import { useState } from "react";
import "./style.css";
import { H1, Hr, ReviewSection } from "./styledComponents";
const Review = () => {
  let [index, setIndex] = useState(Math.floor(Math.random() * person.length));
  let icon = (e) => {
    if (e.currentTarget.id === "l") {
      if (index === 0) {
        setIndex(person.length - 1);
        return;
      }
      return setIndex(index - 1);
    } else if (index === person.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  let { id, name, img, job, text } = person[index];
  return (
    <>
      <H1>Our Reviews</H1>
      <Hr />
      <ReviewSection key={id}>
        <img
          className="imp"
          src="https://th.bing.com/th/id/OIP.UDsYHgBylCcQ9UaS_3o0DAHaHa?w=197&h=197&c=7&o=5&dpr=1.25&pid=1.7"
          alt=""
        />
        <img src={img} alt="" id="img" />
        <p id="name">{name}</p>
        <h2 id="pro">{job}</h2>
        <p id="lorem" className="text">
          {text}
        </p>
        <i
          onClick={icon}
          className="fa fa-chevron-left"
          id="l"
          aria-hidden="true"
        ></i>
        <i
          onClick={icon}
          className="fa fa-chevron-right"
          id="r"
          aria-hidden="true"
        ></i>
        <br />
        <button
          onClick={function () {
            setIndex(Math.floor(Math.random() * person.length));
          }}
        >
          Surprise Me
        </button>
      </ReviewSection>
    </>
  );
};
export default Review;
