"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import RecipeTitle from "./RecipeTitle";
import RecipeItem from "./RecipeItem";

interface RecipeListProps {
  title: string;
  subtitle?: string;
  recipes: { id: number; name: string; image: string }[];
  layout?: "slide" | "row";
  onSeeMore?: () => void;
}

export default function RecipeList({
  title,
  subtitle,
  recipes,
  layout = "row",
  onSeeMore,
}: RecipeListProps) {
  return (
    <section>
      <RecipeTitle title={title} subtitle={subtitle} onSeeMore={onSeeMore} />
      {layout === "slide" ? (
        <Swiper
          spaceBetween={15} // 슬라이드 간격 조정
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 20 }, // PC: 4.5개씩 표시
          }}
          className="rounded-lg"
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RecipeItem image={recipe.image} name={recipe.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}
