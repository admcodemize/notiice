import styled from "styled-components";

export const StyledSwitch = styled("div")`
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  > label {
    display: flex;
    align-items: center;
    width: 48px;
    height: 28px;
    background: #2c3e50;
    border-radius: 2.5em;
    transition: all .5s ease;
    cursor: pointer;
    padding: 0;
  }

  span {
    display: flex;
    margin-left: 0.5em;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: #34495e;
    border-radius: 50%;
    transition: all .5s ease;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    :before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: "\f00d";
      color: #fff;
      font-size: 0.775rem;
    }
  }

  input[type="checkbox"]:checked + label {
    background: #16a085;

    span {
      margin-left: 50%;
      background: #1abc9c;

      ::before {
        font-family: 'Font Awesome 5 Free';
        content: "\f00c";
        font-weight: 900;
      }
    }
  }
`;