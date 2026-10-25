"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

type FaqListProps = {
  items: readonly { question: string; answer: string }[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map(({ question, answer }) => (
        <Accordion.Item
          key={question}
          value={question}
          className="rounded-[20px] border border-studio-line bg-studio-canvas transition-colors data-[state=open]:border-studio-blue/30 data-[state=open]:bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 rounded-[20px] px-6 py-5 text-left font-display text-lg font-medium tracking-[-0.02em] text-studio-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-studio-blue md:text-xl">
              {question}
              <span
                aria-hidden="true"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-studio-navy text-white transition-transform duration-300 group-data-[state=open]:rotate-[135deg] group-data-[state=open]:bg-studio-blue motion-reduce:transition-none"
              >
                <Plus className="h-4 w-4" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
            <p className="max-w-2xl px-6 pb-6 text-[16px] leading-relaxed text-studio-muted">
              {answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
