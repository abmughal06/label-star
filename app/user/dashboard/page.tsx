import {
  FaCartShopping,
  FaFileArrowDown,
  FaFileArrowUp,
  FaWallet,
} from "react-icons/fa6";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-2xl font-medium">Dashboard</h3>
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
        <TableDemo />
      </div>
    </section>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const subscriptions = [
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
  {
    "#": "LS001",
    Paid: "$30",
    Added: "$250.00",
    Used: "$40",
    Remaining: "$50",
    CreatedAt: "Jul 27, 2024",
    Message: "Initial Payment",
  },
];

function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent subscriptions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Paid</TableHead>
          <TableHead>Added</TableHead>
          <TableHead>Used</TableHead>
          <TableHead>Remaining</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions.map((subscription) => (
          <TableRow key={subscription["#"]}>
            <TableCell className="font-medium">{subscription["#"]}</TableCell>
            <TableCell>{subscription.Paid}</TableCell>
            <TableCell>{subscription.Added}</TableCell>
            <TableCell>{subscription.Used}</TableCell>
            <TableCell>{subscription.Remaining}</TableCell>
            <TableCell>{subscription.CreatedAt}</TableCell>
            <TableCell>{subscription.Message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell>$2,500.00</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
