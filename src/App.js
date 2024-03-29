import { useState } from "react";
import "./App.css";
import Forminput from "./components/Forminput";
import Itemlist from "./components/Itemlist";
import FilterForm from "./components/FilterForm";
import SortForm from "./components/SortForm";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "물티슈",
      price: 3000,
      type: "daily",
      date: new Date(2023, 10, 14),
      memo: "양이 많아서 좋다",
      repurchase: true,
    },
  ]);

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  const getPaymentFormData = (data) => {
    setExpenses((prevExpenses) => [
      {
        id: Math.random().toString(),
        title: data.name,
        price: Number(data.price),
        type: data.type || "기타",
        date: new Date(data.date),
        memo: data.memo,
        repurchase: data.repurchase === "yes" ? true : false,
      },
      ...prevExpenses,
    ]);
  };

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [startDate, setStartDate] = useState(todayString);
  const [endDate, setEndDate] = useState("");

  const filteredExpenses = expenses.filter((item) => {
    // 유형별 필터링
    if (typeFilter !== "all" && item.type !== typeFilter) return false;

    // 날짜 범위 필터링
    const itemDate = item.date.toISOString().split("T")[0];
    if (startDate && itemDate < startDate) return false;
    if (endDate && itemDate > endDate) return false;
    return true;
  });

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    // 가격에 따른 정렬
    const comparison = a.price - b.price;

    switch (sortOrder) {
      case "asc":
        return comparison;
      case "desc":
        return -comparison;
      default:
        throw new Error(`Unknown sort order: ${sortOrder}`);
    }
  });

  // 리스트 삭제
  const deleteExpenseItem = (id) => {
    const newFilteredArray = expenses.filter((item) => item.id !== id);
    setExpenses(newFilteredArray);
  };

  return (
    <div className="form-container">
      <Forminput getPaymentFormData={getPaymentFormData} />

      <div>
        <FilterForm
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <SortForm sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <Itemlist items={sortedExpenses} deleteExpenseItem={deleteExpenseItem} />
    </div>
  );
}

export default App;
