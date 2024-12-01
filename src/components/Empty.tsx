"use client";
import React, { useState } from "react";
import Button from "./Button";
import AddIcon from "@/assets/images/AddIcon";
import AddMenu from "./AddMenu";

function Empty({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div className="w-[1168px] h-[160px] top-8 left-6 pt-6 pr-4 pb-6 pl-4 bg-bg-secondary border border-solid border-border-secondary rounded-md  flex justify-center">
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="text-center gap-1">
            <p className="font-semibold text-base text-text-primary">
              Menu jest puste
            </p>
            <p className="font-normal text-sm  text-text-tertiary">
              W tym menu nie ma jeszcze żadnych linków.
            </p>
          </div>
          <Button
            onClick={onClick}
            tailwind={
              "bg-button-primary-bg hover:bg-purple-900 text-white rounded-lg transition duration-300 flex gap-2 items-center"
            }
            icon={<AddIcon />}
          >
            Dodaj pozycję menu
          </Button>
        </div>
      </div>
    </>
  );
}

export default Empty;
