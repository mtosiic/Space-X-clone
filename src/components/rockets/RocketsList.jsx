import RocketsListItem from "./RocketsListItem";

const RocketsList = ({ rockets }) => {
  console.log(rockets);
  return (
    <>
      {rockets.map((rocket) => {
        return <RocketsListItem key={rocket.id} rocket={rocket} />;
      })}
    </>
  );
};

export default RocketsList;
