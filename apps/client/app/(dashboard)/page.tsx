import { FileTextIcon } from "@radix-ui/react-icons";
import { Card } from "components/card/card";
import { CardFooter } from "components/card/cardFooter";
import { Section } from "components/section/section";

export default async function page() {
  return (
    <div>
      <Section showmore title="Folders">
        <div className="flex space-x-3 overflow-x-auto">
          <Card
            icon={<FileTextIcon fill="#111" />}
            title="Documents"
            theme="bg-teal-100"
            containerClassName="py-4"
          >
            <CardFooter />
          </Card>
        </div>
      </Section>
    </div>
  );
}
