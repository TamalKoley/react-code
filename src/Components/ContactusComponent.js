import {contactUsstyles} from "../Style/ContactUsStyle";

export const ContactusComponent = () => {
  return (
    <div style={contactUsstyles.container}>
      <h1 style={contactUsstyles.heading}>Contact Us</h1>
      <p style={contactUsstyles.description}>
        Have questions, feedback, or need assistance? We'd love to hear from you!
      </p>
      <form style={contactUsstyles.form}>
        <input
          type="text"
          placeholder="Your Name"
          style={contactUsstyles.input}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          style={contactUsstyles.input}
          required
        />
        <textarea
          placeholder="Your Message"
          style={contactUsstyles.textarea}
          rows="5"
          required
        ></textarea>
        <button type="submit" style={contactUsstyles.button}
        onClick={(e) => {
          alert("Message Sent!");
        }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

