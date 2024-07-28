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

export default function RecentLabel() {
  return (
    <section>
      <TableDemo />
    </section>
  );
}

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
