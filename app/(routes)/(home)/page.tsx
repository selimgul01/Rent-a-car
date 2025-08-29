import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[300px]">
      <button>Hello</button>
      <Button>Hello</Button>
      <ModeToggle/>
    </div>
  );
}
