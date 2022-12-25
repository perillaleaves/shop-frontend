import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/Api";
import StyledButton from "../Components/StyledButton";

const SignInPage = () => {
  // hook
  const navigate = useNavigate();
  const idInput = useRef();
  const passwordInput = useRef();
  const [inputValue, setInputValue] = useState({
    login_id: "",
    password: "",
  });

  // function
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(idInput);
  };
  const onClickJoinMember = () => {
    navigate("/signup");
  };

  // API CALL
  const handleSubmit = () => {
    API.signin(inputValue.login_id, inputValue.password).then((data) => {
      console.log(data);
      console.log(data.headers.get("Authorization"));
    });
  };

  return (
    <div className="loginpage">
      <div className="loginpage__wrapper">
        <form className="loginpage__form">
          <div className="loginpage__form--field">
            <div className="loginpage__form--id">
              <label className="loginpage__form--text">ID</label>
              <input
                className="loginpage__form--input"
                name="login_id"
                value={inputValue.login_id}
                ref={idInput}
                onChange={onChange}
              />
            </div>
            <div className="loginpage__form--password">
              <label className="loginpage__form--text">PASSWORD</label>
              <input
                className="loginpage__form--input"
                name="password"
                value={inputValue.password}
                ref={passwordInput}
                onChange={onChange}
              />
            </div>
            <StyledButton
              background="black"
              color="white"
              onClick={handleSubmit}
              type="button"
            >
              LOG IN
            </StyledButton>
            <div className="loginpage__form--search">
              <span className="loginpage__search--id">-SEARCH ID</span>
              <span className="loginpage__search--password">
                -SEARCH PASSWORD
              </span>
            </div>
            <StyledButton
              type="button"
              background="default"
              color="black"
              onClick={onClickJoinMember}
            >
              JOIN MEMBER
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
