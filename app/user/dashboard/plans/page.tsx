import { Button } from "@/components/ui/button";

export default function Plans() {
  const plansData = [
    {
      name: "Basic",
      price: "20",
      text: ["You Pay $20.00", "No Discount", "You get $20.00"],
    },
    {
      name: "Silver",
      price: "50",
      text: ["You Pay $50.00", "We offer 2% discount.", "You get $51.00"],
    },
    {
      name: "Gold",
      price: "100",
      text: ["You Pay $100.00", "We offer 3% discount.", "You get $103.00"],
    },
    {
      name: "Platinium",
      price: "150",
      text: ["You Pay $150.00", "We offer 4% discount.", "You get $156.00"],
    },
    {
      name: "Diamond",
      price: "200",
      text: ["You Pay $200.00", "We offer 5% discount.", "You get $210.00"],
    },
    {
      name: "Crown",
      price: "250",
      text: ["You Pay $250.00", "We offer 6% discount.", "You get $265.00"],
    },
  ];
  return (
    <section className="grid grid-cols-6 gap-6">
      {plansData.map((e) => (
        <div key={e.name} className="flex flex-col bg-white p-5 gap-64">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-between items-center bg-yellow-300 px-10 py-5 gap-4">
              <h3 className="text-lg font-medium">{e.name}</h3>
              <h4 className="text-3xl font-medium">${e.price}</h4>
            </div>
            <div className="flex flex-col gap-3">
              {e.text.map((e) => (
                <div key={e} className="flex flex-row gap-2 items-center">
                  <div className="h-[5px] w-[5px] rounded-full bg-slate-700" />
                  <p className="text-md font-light">{e}</p>
                </div>
              ))}
            </div>
          </div>
          <Button>Checkout</Button>
        </div>
      ))}
    </section>
  );
}
