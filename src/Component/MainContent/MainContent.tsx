import { useEffect } from "react";
import { getHexColor } from "../../Helper";
import { useGet } from "../../Hooks";
import Card from "../Common/Card/Card";
import IMainContent from "../../Interface/mainContent";
import Loader from "../Common/Loader/Loader";

const apiUrl = "https://wizard-world-api.herokuapp.com/houses";

const MainContent: React.FC = () => {
  const {
    data: apiData,
    loading,
    error,
    fetchData,
  } = useGet<IMainContent[]>(apiUrl);

  // Trigger the data fetching on component mount
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="parent">
      {apiData?.map((data) => {
        const colorsArray = data.houseColours.split(" and ");
        return (
          <Card
            key={data.id}
            startColor={getHexColor(colorsArray[0])}
            endColor={getHexColor(colorsArray[1])}
            name={data.name}
            animal={data.animal}
            founder={data.founder}
          />
        );
      })}
    </div>
  );
};

export default MainContent;
