import ReactDom from "react-dom/client";

const App = () => {
  return <div className="font-bold bg-red-500">Hello RangManch</div>;
};
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
