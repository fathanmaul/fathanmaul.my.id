import React from "react";
import Button from "../atoms/Button";
import { BsGithub } from "react-icons/bs";

export default function Contacts() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:gap-0">
      <div className="col-span-12 lg:col-span-2">
        <h3 className="uppercase">Contacts</h3>
      </div>
      <div className="col-span-12 grid grid-cols-2 2xl:grid-cols-4 gap-4 lg:col-span-7">
        {Array.from({length: 4}).map((_, idx) => (
            <Button variant={'outline'} key={idx}>
                <span><BsGithub/></span>
                Github
            </Button>
        ))}
      </div>
    </div>
  );
}
