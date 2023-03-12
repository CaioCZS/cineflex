import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({movieData}) {
     const {title , posterURL, id} = movieData
    
    return (

    <MovieContainer>
      <Link to={`/sessoes/:${id}`}>
      <img
        src={posterURL}
        alt={`poster-${title}`}
      />
      </Link>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
`;
