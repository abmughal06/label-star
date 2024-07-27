export default function CreateLabel() {
  const packageType = Array(
    "UPS CA Expedited",
    "UPS CA Express",
    "UPS CA Express Saver",
    "UPS CA Standard",
    "USPS Express",
    "USPS Ground Advantage",
    "USPS Priority"
  );
  return (
    <section className="flex flex-col gap-6">
      {/* <h4 className="text-2xl font-medium">Create Single Label</h4> */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <LocalLabel name="TYPE" />
          <SelectableDropDown
            values={packageType}
            placeholder="---- Select ----"
            label="---- Select ----"
          />
        </div>
        <div>
          <LocalLabel name="PACKAGE WEIGHT" desc="(120 LBS MAX)" />
          <Input className="border-none bg-white" placeholder="0 LBS" />
        </div>
      </div>
      <div className="bg-primary text-sm font-medium text-white p-2">
        PACKAGE INFORMATION
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <LocalLabel name="Length" desc="(in)" isRequired={true} />
          <Input className="border-none bg-white" placeholder="0.0 in" />
        </div>
        <div>
          <LocalLabel name="Width" desc="(in)" isRequired={true} />
          <Input className="border-none bg-white" placeholder="0.0 in" />
        </div>
        <div>
          <LocalLabel name="Height" desc="(in)" isRequired={true} />
          <Input className="border-none bg-white" placeholder="0.0 in" />
        </div>
      </div>
      <div className="h-[0.5px] bg-gray-400" />
      <div className="grid grid-cols-3 gap-6">
        <div>
          <LocalLabel name="Description" desc="(optional)" />
          <Textarea
            className="bg-white"
            placeholder="Enter Package information"
            rows={5}
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <LocalLabel name="Reference 1" desc="(optional)" />
            <Input
              className="border-none bg-white"
              placeholder="Enter first reference number"
            />
          </div>
          <div>
            <LocalLabel name="Reference 2" desc="(optional)" />
            <Input
              className="border-none bg-white"
              placeholder="Enter second reference number"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between mt-8 mb-1">
          <div className="flex flex-row gap-2 tems-center">
            <Switch className="" id="require-signature" />
            <h4>Require Signature</h4>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Switch className="" id="satureday-delivery" />
            <h4>Satureday Delivery</h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-primary text-sm font-medium text-white p-2">
            To Address
          </div>
          <div>
            <LocalLabel name="Country" isRequired={true} />
            <SelectableDropDown
              values={['United States']}
              placeholder="Select Country"
              label="Select Country"
            />
          </div>
          <div>
            <LocalLabel name="Name" isRequired={true} />
            <Input
              className="border-none bg-white"
              placeholder="Name"
            />
          </div>
          <div>
            <LocalLabel name="Company/Reference Number" isRequired={false} desc={"(optional)"} />
            <Input
              className="border-none bg-white"
              placeholder="Company"
            />
          </div>
          <div>
            <LocalLabel name="Phone" isRequired={false} />
            <Input
              className="border-none bg-white"
              placeholder="Phone"
            />
          </div>
          <div>
            <LocalLabel name="Street" isRequired={true} />
            <Input
              className="border-none bg-white"
              placeholder="Street"
            />
          </div>
          <div>
            <LocalLabel name="Street 2" isRequired={false} desc={"(optional)"} />
            <Input
              className="border-none bg-white"
              placeholder="Street 2"
            />
          </div>
          <div>
            <LocalLabel name="City" isRequired={false} />
            <Input
              className="border-none bg-white"
              placeholder="City"
            />
          </div>
          <div>
            <LocalLabel name="State" isRequired={false} />
            <Input
              className="border-none bg-white"
              placeholder="State"
            />
          </div>
          <div>
            <LocalLabel name="Zip" isRequired={true} />
            <Input
              className="border-none bg-white"
              placeholder="Zip"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-primary text-sm font-medium text-white p-2">
            From Address
          </div>
          <div>
            <LocalLabel name="Country" isRequired={true} />
            <SelectableDropDown
              values={['United States']}
              placeholder="Select Country"
              label="Select Country"
            />
          </div>
          <div>
            <LocalLabel name="Name" isRequired={true} />
            <Input
              className="border-none bg-white"
              placeholder="Name"
            />
          </div>
          <div>
            <LocalLabel name="Company/Reference Number" isRequired={false} desc={"(optional)"} />
            <Input
              className="border-none bg-white"
              placeholder="Company"
            />
          </div>
          <div>
            <LocalLabel name="Phone" isRequired={false} />
            <Input
              className="border-none bg-white"
              placeholder="Phone"
            />
          </div>
          <div>
            <LocalLabel name="Street" isRequired={true} />
            <Input
              className="border-none bg-white"
              placeholder="Street"
            />
          </div>
          <div>
            <LocalLabel name="Street 2" isRequired={false} desc={"(optional)"} />
            <Input
              className="border-none bg-white"
              placeholder="Street 2"
            />
          </div>
          <div>
            <LocalLabel name="City" isRequired={false} />
            <Input
              className="border-none bg-white"
              placeholder="City"
            />
          </div>
          <div>
            <LocalLabel name="State" isRequired={false} />
            <Input
              className="border-none bg-white"
              placeholder="State"
            />
          </div>
          <div>
            <LocalLabel name="Zip" isRequired={true} />
            <Input
              className="border-none bg-white"
              placeholder="Zip"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pb-5">
        <Button className="bg-blue-500">Create Label</Button>
        <h3 className="text-2xl font-bold">
            Price:<span className="text-green-500">$0</span>
        </h3>
      </div>
    </section>
  );
}
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

type SelectableDropDownProps = {
  values: string[];
  placeholder: string;
  label: string;
};

const SelectableDropDown: React.FC<SelectableDropDownProps> = ({
  values,
  placeholder,
  label,
}) => {
  return (
    <Select>
      <SelectTrigger className="w-full bg-white border-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {values.map((e: string) => (
            <SelectItem key={e} value={e}>
              {e}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

function LocalLabel({ name, desc, isRequired }: any) {
  return (
    <h3 className="text-sm font-semibold pb-1">
      {name} <span className="text-red-600">{isRequired ? "*" : ""}</span>{" "}
      <span className=" italic text-gray-400">{desc}</span>
    </h3>
  );
}
