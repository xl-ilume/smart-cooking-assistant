interface RecipeTitleProps {
    title: string;
    subtitle?: string;
    onSeeMore?: () => void;
  }
  
  export default function RecipeTitle({ title, subtitle, onSeeMore }: RecipeTitleProps) {
    return (
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {onSeeMore && (
          <button onClick={onSeeMore} className="text-blue-600 text-sm hover:underline">
            더보기
          </button>
        )}
      </div>
    );
  }
  