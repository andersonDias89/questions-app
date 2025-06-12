import { InputDefault } from "@/components/Inputs/InputDefault";
import { SelectDefault } from "@/components/Selects/SelectDefault";

export default function HomePage() {
  return (
    <div className="flex gap-2 items-center justify-center h-screen w-120">
      <InputDefault />
      <SelectDefault placeholder="Escolha" options={["item 1", "item 2"]} />
    </div>
  );
}
