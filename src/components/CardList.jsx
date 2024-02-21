import Card from "./Card";

const CardList = ({ robots }) => {
  console.log("Cardlist");
  return (
    <>
      {robots.map((user, i) => {
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
