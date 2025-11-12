import "./UserInfoPage.css";



function Support() {
  return (
    <div className="user-page">
      <h2 className="section-title">Customer Support</h2>
      <p className="support-text">
        Have questions or need help? We’re here for you 24/7.
      </p>
      <form className="support-form">
        <input type="text" placeholder="Your Name" />
        <textarea placeholder="Describe your issue..." rows="4" />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

export default Support;