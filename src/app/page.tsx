"use client";
import AddMenu from "@/components/AddMenu";
import Empty from "@/components/Empty";
import List from "@/components/List";
import { data } from "@/data/list";
import { useState } from "react";
import { CounterProvider } from "./IdContext";

export default function Home() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <CounterProvider>
      <div className="p-3 flex flex-col items-center justify-center gap-3">
        {data.length > 0 ? (
          <List data={data} />
        ) : (
          !isAddOpen && <Empty onClick={() => setIsAddOpen(true)} />
        )}
        {isAddOpen && (
          <AddMenu items={data} onClose={() => setIsAddOpen(false)} />
        )}
      </div>
    </CounterProvider>
  );
}
