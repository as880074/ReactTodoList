import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import {
  HashRouter,
  NavLink,
  Routes,
  Link,
  Route,
  Outlet,
} from 'react-router-dom';

const Todo = () => {
  return <div id="loginPage" className="bg-yellow">
    <div className="conatiner loginPage vhContainer ">
      <div className="side">
        <a href="#"><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="" /></a>
        <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg" />
      </div>
      <div>
        <form className="formControls" action="index.html">
          <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
          <label className="formControls_label" for="email">Email</label>
          <input className="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required />
          <span>此欄位不可留空</span>
          <label className="formControls_label" for="pwd">密碼</label>
          <input className="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required />
          <input className="formControls_btnSubmit" type="button" onclick="javascript:location.href='#todoListPage'" value="登入" />
          <a className="formControls_btnLink" href="#signUpPage">註冊帳號</a>
        </form>
      </div>
    </div>
  </div>
};

const Register = () => {
  return <div>
  <form className="formControls" action="index.html">
    <h2 className="formControls_txt">註冊帳號</h2>
    <label className="formControls_label" for="email">Email</label>
    <input className="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required />
    <label className="formControls_label" for="name">您的暱稱</label>
    <input className="formControls_input" type="text" name="name" id="name" placeholder="請輸入您的暱稱" />
    <label className="formControls_label" for="pwd">密碼</label>
    <input className="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required />
    <label className="formControls_label" for="pwd">再次輸入密碼</label>
    <input className="formControls_input" type="password" name="pwd" id="pwd" placeholder="請再次輸入密碼" required />
    <input className="formControls_btnSubmit" type="button" onclick="javascript:location.href='#todoListPage'" value="註冊帳號" />
    <Link className="formControls_btnLink"  to='/'>登入</Link>
  </form>
</div>
};
function Layout() {
  return (
    <div id="signUpPage" className="bg-yellow">
    <div className="conatiner signUpPage vhContainer">
      <div className="side">
        <a href="#"><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="" /></a>
        <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg" />
      </div>
      <Outlet />
    </div>
  </div>
  );
}
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;