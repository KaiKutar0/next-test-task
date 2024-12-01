"use client";
import React, { useState } from "react";
import Button from "./Button";
import Item from "./Item";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Item as ItemType } from "@/types/item";
import AddMenu from "./AddMenu";

function List({ data }: { data: ItemType[] }) {
  const [items, setItems] = useState(data);
  const [isAddOpen, setIsAddOpen] = useState(false);

  function handleDrag(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }
    setItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }
  return (
    <div className="w-[1168px] border border-solid border-border-primary rounded-lg ">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
        <SortableContext items={data} strategy={verticalListSortingStrategy}>
          {items?.map((i) => (
            <div className="bg-bg-secondary" key={i.id}>
              <Item
                itemKey={i.id}
                name={i.name}
                link={i.link}
                items={i.items}
                key={i.id}
              />
            </div>
          ))}
        </SortableContext>
      </DndContext>
      {isAddOpen && (
        <div className="bg-bg-secondary pt-4 pr-6 pb-4 pl-6">
          <AddMenu items={data} onClose={() => setIsAddOpen(false)} />
        </div>
      )}
      <div className="bg-bg-secondary pr-4 pb-6 pl-4 pt-6 border border-solid border-t-1">
        <Button
          onClick={() => setIsAddOpen(true)}
          tailwind={
            "bg-primary-bg text-text-primary border border-solid border-border-primary rounded-lg transition flex gap-1 items-center"
          }
        >
          Dodaj pozycję menu
        </Button>
      </div>
    </div>
  );
}

export default List;
