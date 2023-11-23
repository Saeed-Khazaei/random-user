import HighlightableWrapper from "@/components/HighlightableWrapper";
import { IUser } from "@/modules/User/Types";
import React, { FC } from "react";
import Image from "next/image";

interface Props {
  data: IUser;
}
const Card: FC<Props> = ({ data }) => {
  const { picture, name, location } = data;
  return (
    <div className="flex flex-row gap-2 items-start bg-white rounded-md text-gray-800 p-2 w-96 shadow-md hover:shadow-lg translate-x-2 transition-all duration-200">
      <HighlightableWrapper data={picture.medium}>
        {picture.medium && (
          <Image
            src={picture.medium}
            alt={picture.medium}
            className="aspect-square rounded-md p-1 overflow-hidden"
            width={80}
            height={80}
          />
        )}
      </HighlightableWrapper>
      <div className="flex flex-col gap-1 items-start py-2">
        <HighlightableWrapper data={name}>
          <h1 className="font-semibold text-2xl">
            {name ? `${name.first} ${name.last}` : null}
          </h1>
        </HighlightableWrapper>
        <HighlightableWrapper data={location.country}>
          <p>{location.country}</p>
        </HighlightableWrapper>
      </div>
    </div>
  );
};

export default Card;
