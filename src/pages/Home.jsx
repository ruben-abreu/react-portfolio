function home() {
  return (
    <div>
      <div className='landing'>
        <h3>Hello Everyone!</h3>
        <p>
          My name is Ruben. <span> {`I'm a full stack developer`}</span>
        </p>
      </div>
      <div>
        <button>My CV</button>
        <a href='https://www.linkedin.com/in/ruben-abreu1/'>
          <button>LinkedIn</button>
        </a>
        <a href='https://github.com/ruben-abreu'>
          <button>Github</button>
        </a>
      </div>
    </div>
  );
}

export default home;
