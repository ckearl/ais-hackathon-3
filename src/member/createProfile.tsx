export function CreateProfile() {
  return (
    <form id="createAccount">
      <h2>Create Account</h2>
      <div id="titleUnderline"></div>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required></input>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required></input>
      <label htmlFor="netID">Net ID</label>
      <input type="text" id="netID" name="netID" required></input>
      <p>Student Type</p>
      <div className="radioSelector">
        <input
          type="radio"
          id="junior"
          name="studentType"
          value="junior"
          required
        ></input>
        <label htmlFor="junior">IS Junior Core</label>
        <input
          type="radio"
          id="senior"
          name="studentType"
          value="senior"
          required
        ></input>
        <label htmlFor="senior">IS Senior</label>
        <input
          type="radio"
          id="mism"
          name="studentType"
          value="mism"
          required
        ></input>
        <label htmlFor="mism">MISM</label>
        <input
          type="radio"
          id="other-byu"
          name="studentType"
          value="other-byu"
          required
        ></input>
        <label htmlFor="other-byu">BYU Student</label>
        <input
          type="radio"
          id="other-guest"
          name="studentType"
          value="other-guest"
          required
        ></input>
        <label htmlFor="other-guest">Other/Guest</label>
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}
