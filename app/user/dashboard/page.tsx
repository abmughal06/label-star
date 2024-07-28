import {
  FaCartShopping,
  FaFileArrowDown,
  FaFileArrowUp,
  FaWallet,
} from "react-icons/fa6";
import RecentLabel from "./recent_label/page";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-6">
      {/* <h3 className="text-2xl font-medium">Dashboard</h3> */}
      <div className="flex flex-row gap-6">
        <div className="bg-white p-5 flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-light">BALANCE</h4>
            <h2 className="text-xl font-bold">$0.2</h2>
            <p className="text-xs font-medium">Your current balance</p>
          </div>
          <FaWallet className="text-4xl text-blue-400" />
        </div>
        <div className="bg-white p-5 flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-light">TOTAL DEPOSITED</h4>
            <h2 className="text-xl font-bold">$0.2</h2>
            <p className="text-xs font-medium">
              The amount of money you have deposited
            </p>
          </div>
          <FaFileArrowDown className="text-4xl text-orange-400" />
        </div>
        <div className="bg-white p-5 flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-light">TOTAL ORDERS</h4>
            <h2 className="text-xl font-bold">$0.2</h2>
            <p className="text-xs font-medium">
              Total amount of orders you have made
            </p>
          </div>
          <FaCartShopping className="text-4xl text-green-400" />
        </div>
        <div className="bg-white p-5 flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-light">TOTAL SPENT</h4>
            <h2 className="text-xl font-bold">$0.2</h2>
            <p className="text-xs font-medium">
              Total amount spent on the site
            </p>
          </div>
          <FaFileArrowUp className="text-4xl text-red-400" />
        </div>
      </div>
      <div className="p-4 w-full bg-primary text-yellow-300 text-xl font-light">
        Your Subscriptions
      </div>
      <div>
        <RecentLabel />
      </div>
    </section>
  );
}
