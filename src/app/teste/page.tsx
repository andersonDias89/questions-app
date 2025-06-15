import { RadioGroup } from "@/components/ui/RadioGroup";

export default async function Teste() {
  return (
    <div>
      <RadioGroup
        options={[
          { id: "r1", value: "default", label: "Default" },
          { id: "r2", value: "comfortable", label: "Comfortable" },
          { id: "r3", value: "compact", label: "Compact" },
        ]}
        name="layout"
        defaultValue="comfortable"
      />
    </div>
  );
}
