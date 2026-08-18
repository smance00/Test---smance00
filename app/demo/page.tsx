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
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main className="olv-page">
        <div className="wrap">
          <p className="olv-kicker reveal">Request a demo</p>
          <h1 className="reveal">See it on a process like yours.</h1>
          <p className="olv-prose reveal">
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
