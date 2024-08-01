import Image from 'next/image';
import React from 'react';

interface ExploreJobCardProps {
  title: string;
  description: string;
  image: string;
}

const ExploreJobCard = ({ title, description, image }: ExploreJobCardProps) => {
  return (
    <div className="p-4 rounded-md border shadow-sm space-y-4">
      <Image
        src={image}
        width={60}
        height={60}
        alt="company image"
        className="bject-cover rounded-md"
      />
      <h1>{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ExploreJobCard;
