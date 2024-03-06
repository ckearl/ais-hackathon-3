function CreateProfile() {
  return (
    <form id="createAccount">
      <h2>Create Account</h2>
      <div id="titleUnderline"></div>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required></input>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required></input>
      <label htmlFor="studentType">Student Type</label>
      <select id="studentType" name="studentType" required>
        <option value="junior">IS Junior Core</option>
        <option value="senior">IS Senior</option>
        <option value="mism">MISM</option>
        <option value="other-byu">Other BYU Student</option>
        <option value="other-guest">Other/Guest</option>
      </select>
      <button type="submit">Create Account</button>
    </form>
  );
}
