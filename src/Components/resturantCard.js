import dominosimage from "./../images/dominos-logo.jpeg";
import Omimage from "./../images/om-logo.jpeg";
import southflavourImage from "./../images/southflavour-logo.jpg";
import aminiaImage from "./../images/aminia-logo.jpeg";
import kfcImage from "./../images/kfc-logo.png";
import samratImage from "./../images/samrat-logo.jpeg";
import dolphinImage from "./../images/dolphin-logo.jpeg";

export const Resturantcard = (props) => {
  const { resObj } = props;
  const { name, avgRating, costForTwo, cloudinaryImageId } = resObj;
  //console.log(imgsrc);
  return (
    <div className="res-card">
      <div className="res-logo">
        <img
          className="res-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="rest-logo"
        />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>Rating: {avgRating}</h4>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export default Resturantcard;
