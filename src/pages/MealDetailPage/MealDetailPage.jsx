import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MealDetail from "../../components/MealDetail/MealDetail";

export default function MealDetailPage({}) {
  const location = useLocation();
  const [mealDetail, setMealDetail] = useState({
  });
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
    setMealDetail(location.state);
  }, [location]);

  
  return (
    <main className="MealDetailPage">
      <MealDetail mealDetail={mealDetail} />
    </main>
  );
}
