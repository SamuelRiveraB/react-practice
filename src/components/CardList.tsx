import Card from "./Card.tsx";
import { Robot } from "../containers/App";

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => {
  console.log("Cardlist");
  return (
    <>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </>
  );
};

export default CardList;
