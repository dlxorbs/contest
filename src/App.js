import logo from "./logo.svg";
import Button from "./component/Button/Button";
import CardThumb from "./component/Card/CardThumb";
import Profile from "./component/Comment/Profile";
import ProfilePage from "./component/Comment/ProfilePage";

function App() {
  return (
    <div className="App">
      <Button className={"round"}></Button>
      <CardThumb
        thumbnail={"https://www.codingfactory.net/wp-content/uploads/abc.jpg"}
        title={"asd"}
      ></CardThumb>
      <ProfilePage></ProfilePage>
    </div>
  );
}

export default App;
