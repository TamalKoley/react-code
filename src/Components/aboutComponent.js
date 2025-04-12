import {Aboutstyles} from "../Style/aboutStyle";
export const AboutComponent = () => {
  return (
    <div style={Aboutstyles.container}>
      <h1 style={Aboutstyles.heading}>About Us</h1>
      <p style={Aboutstyles.description}>
        Welcome to our Food Ordering App! We are passionate about delivering delicious meals right to your doorstep. 
        Our mission is to make food ordering simple, fast, and enjoyable for everyone.
      </p>
      <p style={Aboutstyles.description}>
        Whether you're craving a quick snack or a full-course meal, we've got you covered. Thank you for choosing us!
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXZxM9oJMgCXnxPeMhjA_sSlUDyEF7IQw-Q&s" // Replace with your image URL
        alt="About Us"
        style={Aboutstyles.image}
      />
    </div>
  );
};
