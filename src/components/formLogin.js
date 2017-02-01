class Register extends React.Component 
{
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
	   <LoginFacebook/>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
