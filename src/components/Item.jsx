import { useLoaderData } from "react-router";
import { stockItems } from "../stockitems";
export function loader({ params }) {
  let itemInfo = { id: params.id, ...stockItems[params.id] };
  return { itemInfo };
}

export default function Item(props) {
  const { itemInfo } = useLoaderData();

  return (
    <div className="itemInfo">
      <h1>{itemInfo.name}</h1>
    </div>
  );
}
