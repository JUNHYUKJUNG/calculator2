import { useState } from "react";
import CalInput from "./components/CalInput";
import CalNumberBtn from "./components/CalNumberBtn";
import CalDelBtn from "./components/CalDelBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CalEnterBtn from "./components/CalEnterBtn";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState();
  const [operator, setOperator] = useState();

  return (
    <main className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-gray-300 px-8 py-12 rounded-lg shadow-lg">
        <div className="mb-12 flex justify-end">
          <div className="border-4 border-gray-500 bg-gray-600 px-1 w-7 h-8"></div>
          <div className="border-4 border-gray-500 bg-gray-600 px-1 w-7 h-8"></div>
          <div className="border-4 border-gray-500 bg-gray-600 px-1 w-7 h-8"></div>
          <div className="border-4 border-gray-500 bg-gray-600 px-1 w-7 h-8"></div>
        </div>
        <CalInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <CalNumberBtn result={result} setResult={setResult} number="1" />
          <CalNumberBtn result={result} setResult={setResult} number="2" />
          <CalNumberBtn result={result} setResult={setResult} number="3" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="+"
            bgColor="bg-pink-300 active:bg-pink-500"
          />
          <CalNumberBtn result={result} setResult={setResult} number="4" />
          <CalNumberBtn result={result} setResult={setResult} number="5" />
          <CalNumberBtn result={result} setResult={setResult} number="6" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="-"
            bgColor="bg-pink-500 active:bg-pink-700"
          />
          <CalNumberBtn result={result} setResult={setResult} number="7" />
          <CalNumberBtn result={result} setResult={setResult} number="8" />
          <CalNumberBtn result={result} setResult={setResult} number="9" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="*"
            bgColor="bg-pink-700 active:bg-pink-900"
          />
          <CalEnterBtn
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
            setOperator={setOperator}
          />
          <CalNumberBtn result={result} setResult={setResult} number="0" />
          <CalDelBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="/"
            bgColor="bg-pink-900 active:bg-pink-950"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
