import './Profile.css';

const Profile = (): React.ReactElement => {
  return (
    <section className="container">
      <div className="image-wrapper">
        <img className="image" src="" alt="" />
        <div className="overlay">
          <div className="overlay-content"></div>
        </div>
      </div>
      <div className="data-wrapper">
        <h1 className="title">John Doe</h1>
        <button className="edit-button" type="button"></button>
        <p className="occupation">Lorem ipsum</p>
      </div>
      <button className="add-button" type="button"></button>
    </section>
  );
};

export default Profile;