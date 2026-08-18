import type { Metadata } from "next";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";

export const metadata: Metadata = {
  title: "Book a demo — Olevy",
  description: "Schedule a 30-minute walkthrough of Human in the Loop hiring intelligence.",
};

export default function DemoPage() {
  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main className="olv-page">
        <div className="wrap">
          <p className="olv-kicker reveal">Demo</p>
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
