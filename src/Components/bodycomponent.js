import "./../Style/bodycomponent.css";
//import { ResturantList } from "./../utils/mockData";
import { Resturantcard } from "./resturantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmerui";

import dominosimage from "./../images/dominos-logo.jpeg";
import Omimage from "./../images/om-logo.jpeg";
import southflavourImage from "./../images/southflavour-logo.jpg";
import aminiaImage from "./../images/aminia-logo.jpeg";
import kfcImage from "./../images/kfc-logo.png";
import samratImage from "./../images/samrat-logo.jpeg";
import dolphinImage from "./../images/dolphin-logo.jpeg";

export const BodyComponent = () => {
  //normal javascript variable
  //let ResList=ResturantList;

  //state variable -- with super powewrs of react // DOM manipulation
  // ResList --the list of total data ,, setReslist function to update ResList
  //use state returns an array of two object one is stateful value and 2nd one is a function to update the list

  // const arr=useState(ResturantList)
  ///const [ResList,setReslist]= arr;
  // const ResList=arr[0];
  // const setReslist=arr[1];

  //console.log("body renders");
  const [ResList, setReslist] = useState([]);

  const [ConstResList, setConsReslist] = useState([]);
  const [searchText, setsearchText] = useState("");

  //console.log("body renders")

  useEffect(() => {
    //console.log("use effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    //  const data= await fetch("http://localhost:1111")

    //  const fetchdata= await data.json();
    //    setReslist(fetchdata);
    //   setConsReslist(fetchdata);

    const swiggyData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.576926&lng=88.482999"
    );
    const swiggyfetchdata = await swiggyData.json();
    //console.log(swiggyfetchdata.data.cards[1]);
    // optional chaining
    setReslist(
      swiggyfetchdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setConsReslist(
      swiggyfetchdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-button">
        <input
          className="seacrh-box"
          type="Text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
            if (e.target.value === "") {
              setReslist(ConstResList);
            } else {
              const seacrhedResList = ConstResList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });

              if (seacrhedResList.length === 0) {
                alert("No result found");
                setReslist(ConstResList);
              } else {
                setReslist(seacrhedResList);
              }
            }
          }}
        ></input>
        <button
          onClick={() => {
            //setReslist(ConstResList);
            const seacrhedResList = ConstResList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            if (seacrhedResList.length === 0) {
              alert("No result found");
              setReslist(ConstResList);
            } else {
              setReslist(seacrhedResList);
            }
            //console.log(searchText)
          }}
        >
          search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            //TotalResList=ResList;
            const filteredResList = ResList.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setReslist(filteredResList);
          }}
        >
          Top rated
        </button>
        <button
          className="clear-filter-button"
          onClick={() => {
            setReslist(ConstResList);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="res-container">
        {ResList.map((restrantdata) => (
          <Resturantcard
            key={restrantdata.info.id}
            resObj={restrantdata.info}
          />
        ))}
      </div>
    </div>
  );
};
