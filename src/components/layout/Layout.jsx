import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 144rem;
  width: 95%;
  margin: 0 auto;
`;
export const ButtonLogin = styled.button`
  display: block;
  padding: 1.3rem 5rem;
  font-weight: 700;
  color: #fff;
  background-color: #f4991a;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonSignUp = styled.button`
  display: block;
  padding: 1.3rem 5rem;
  font-weight: 700;
  color: #fff;
  background-color: #321313;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:10000;
`;
export const Form = styled.form`
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  padding: 2rem 6rem;
  margin-bottom: 4rem;
`;
export const Input = styled.input`
  width: 30rem;
  padding: 1rem 3rem;

  &:focus {
    outline: none;
  }
`;
export const ButtonSend = styled.button`
  display: inline-block;
  width: 100%;
  padding: 1.3rem 5rem;
  font-weight: 700;
  color: #fff;
  background-color: #f4991a;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #321313;
  }
`;

export const Card = styled.article`
  background-color: rgb(244, 153, 26);
  border: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 2rem;
  text-align: center;
  width: 30rem;
  transition: transform 0.3s, box-shadow 0.5s;

  &:hover {
    transform: translateY(5px);
    box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.3);
  }
`;
export const CardIMG = styled.img`
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

export const SkeletonPluse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: 100% 0%;
    }
  }
`;
export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
export const ProfileForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Label = styled.label`
  font-weight: 700;
  text-transform: uppercase;
  display: block;
`;

export const Legend = styled.legend`
  font-size: 2rem;
  color: #333333;
`;

export const InputEdit = styled.input`
  padding: 1rem;
  display: block;
  width: 100%;
  background-color: #e1e1e1;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1rem;
`;
export const SelectEdit = styled.select`
  padding: 1rem;
  display: block;
  width: 100%;
  background-color: #e1e1e1;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1rem;
`;
 

export const TextArea = styled.textarea`
  padding: 1rem;
  display: block;
  width: 100%;
  height: 20rem;
  background-color: #e1e1e1;
  margin-bottom: 2rem;
  border: none;
  border-radius: 1rem;
`;

export const TabsList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 3rem 0 0 0;

  padding-bottom: 1rem;
`;

export const Tab = styled.li`
  transition: border-bottom 1s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  &:after {
    padding: 0.5rem 0;
    display: block;
    content: "";
    border-bottom: solid 2px rgba(244, 153, 26, 0.7);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const CardNoPets = styled.div`
  border: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 2rem;
  width: 100%;
  max-width: 500px;
  padding: 12rem 3rem;
  margin: auto;
  text-align: center;
`;

export const ButtonSave = styled.button`
  padding: 2rem 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #fff;
  font-size: 2.5rem;
  border-bottom-left-radius: 2rem;
  &:hover {
    background-color: #321313;
  }
`;
export const ButtonAdopt = styled.button`
  padding: 2rem 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #fff;
  font-size: 2.5rem;
  border-bottom-right-radius: 2rem;
  &:hover {
    background-color: #321313;
  }
`;

export const LiPanelAdmin = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;
  border-radius: 1rem;
  &:hover {
    background-color: rgba(155, 155, 155, 0.3);
    cursor: pointer;
  }
`;
export const ButtonAdd = styled.button`
  display: inline-block;
  padding: 1.3rem 4rem;
  font-weight: 700;
  color: #fff;
  background-color: #f4991a;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;