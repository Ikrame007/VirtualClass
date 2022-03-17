import { v4 as uuidv4 } from "uuid";
import './Rating.scss';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color }}
            className={
              value.rate + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value.rate >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
     <span className="text-rate">({value.notes} notes)</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FDCC0D",
};

export default Rating;