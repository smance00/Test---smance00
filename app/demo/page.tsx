import type { Metadata } from "next";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";

export const metadata: Metadata = {
  title: "Request a demo — Olevy",
  description: "Thirty minutes with a person. We walk a hiring process like yours and leave the decision with you.",
};

export default function DemoPage() {
  return (
    <div className="edh">
      <EditorialFx />
      <LoopChrome />
      <main className="edh-page">
        <div className="container">
          <p className="eyebrow reveal">Request a demo</p>
          <h1 className="reveal">See it on a process like yours.</h1>
          <p className="prose reveal">
            Thirty minutes with a person — not a recording. We walk a hiring process like yours and leave the decision with you.
          </p>
          <div className="reveal">
            <DemoRequestForm />
          </div>
        </div>
      </main>
      <LoopFooter />
    </div>
  );
}
