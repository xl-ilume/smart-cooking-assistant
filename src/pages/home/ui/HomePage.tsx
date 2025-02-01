"use client";

import React from "react";
import HomeBanner from "./HomeBanner";
import RecipeList from "@/features/recipe/ui/RecipeList";

const dummyRecipes = [
  { id: 1, name: "김치찌개", image: "/images/kimchi-stew.jpg" },
  { id: 2, name: "된장찌개", image: "/images/soybean-stew.jpg" },
  { id: 3, name: "불고기", image: "/images/bulgogi.jpg" },
  { id: 4, name: "비빔밥", image: "/images/bibimbap.jpg" },
  { id: 5, name: "파스타", image: "/images/pasta.jpg" },
  { id: 6, name: "샐러드", image: "/images/salad.jpg" },
];

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <div className="max-w-[1024px] mx-auto px-4 py-6 space-y-8">
        <RecipeList
          title="내 재료 기반 추천 레시피"
          recipes={dummyRecipes}
          layout="slide"
          onSeeMore={() => console.log("더보기 클릭")}
        />
        <RecipeList
          title="화제의 레시피"
          recipes={dummyRecipes}
          layout="row"
          onSeeMore={() => console.log("더보기 클릭")}
        />
        <RecipeList
          title="최신 레시피"
          recipes={dummyRecipes}
          layout="row"
          onSeeMore={() => console.log("더보기 클릭")}
        />
      </div>
    </>
  );
};

export default HomePage;
