"use client";
import Button from "./Button";
import DropIcon from "@/assets/images/DropIcon";
import { Item as ItemType } from "@/types/item";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import AddMenu from "./AddMenu";
import { data } from "@/data/list";

function Item({
  itemKey,
  name,
  link,
  items,
}: {
  itemKey: number;
  name: string;
  link: string;
  items?: ItemType[];
}) {
  const [innerItems, setInnerItems] = useState(items ?? []);
  const [isAddOpen, setIsAddOpen] = useState(false);
  function handleDrag(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }

    setInnerItems((items) => {
      if (items.length === 0) {
        return [];
      }
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  }
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: itemKey,
    });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-full bg-bg-primary "
    >
      <div className="flex pt-6 pr-4 pl-4 pb-6 justify-between border border-solid border-border-primary">
        <div className="flex">
          <Button icon={<DropIcon />}></Button>
          <div className="flex flex-col gap-1">
            <p>{name}</p>
            <a href={link} target="_blank">
              {link}
            </a>
          </div>
        </div>
        <div className="flex">
          <Button
            onClick={() => {
              data.splice(itemKey, 1);
              console.log(itemKey, data);
            }}
            tailwind={
              "bg-primary-bg text-text-primary border border-solid border-border-primary rounded-l-lg transition flex gap-1 items-center"
            }
          >
            Usuń
          </Button>
          <Button
            tailwind={
              "bg-primary-bg text-text-primary border border-solid border-border-primary transition flex gap-1 items-center"
            }
          >
            Edytuj
          </Button>
          <Button
            onClick={() => {
              setIsAddOpen(true);
            }}
            tailwind={
              "bg-primary-bg text-text-primary border border-solid border-border-primary rounded-r-lg transition flex gap-1 items-center"
            }
          >
            Dodaj pozycję menu
          </Button>
        </div>
      </div>
      <div>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
          <SortableContext
            items={innerItems}
            strategy={verticalListSortingStrategy}
          >
            {innerItems?.map((i) => (
              <div className="pl-16 bg-bg-secondary" key={i.id}>
                <Item
                  itemKey={i.id}
                  name={i.name}
                  link={i.link}
                  items={i.items}
                />
              </div>
            ))}
          </SortableContext>
        </DndContext>
        {isAddOpen && (
          <div className="bg-bg-secondary pt-4 pr-6 pb-4 pl-6">
            <AddMenu items={innerItems} onClose={() => setIsAddOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
