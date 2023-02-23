import { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./components/login";

export default function Home() {
  const [count, setCount] = useState(0);
  const [countInTimeout, setCountInTimeout] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCountInTimeout(count);
    }, 3000);
    setCount(3);
  }, [count]);
  return (
    <Container>
      <Login />
      {/* <HomeLoding /> */}
      {/* {countInTimeout === 3 ? <Login /> : <HomeLoding />} */}
      {/* <ThemeToggle /> */}
    </Container>
  );
}
const Container = styled.div`
  /* max-width: 450px;
  width: 100%;
  margin: auto; */
`;
