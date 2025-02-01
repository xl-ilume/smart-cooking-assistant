interface RecipeItemProps {
  image: string;
  name: string;
}

export default function RecipeItem({ image, name }: RecipeItemProps) {
  return (
    <div className="rounded-md flex flex-col pb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-md"
      />
      <p className="mt-2 text-sm font-semibold">{name}</p>
    </div>
  );
}
