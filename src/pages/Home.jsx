// src/pages/Home.jsx
import React from "react";
import ShawarmaCard from "../components/ShawarmaCard";
import CategoryCard from "../components/CategoryCard";
import LocationRow from "../components/LocationRow";
import SearchBar from "../components/SearchBar";
import { categories, featuredShawarmas } from "../data/shawarmaData";
import Rating from "../components/Rating";

const Home = () => {
	const rating = 4.95;
	const reviews = 73;
	return (
		<div className="p-4 flex flex-col items-center justify-center relative">
			<div className="w-full text-slate-100 text-start font-semibold text-4xl sm:text-5xl p-5 md:py-8 bg-hero bg-cover h-60 sm:h-[425px] lg:w-[640px] block justify-center absolute top-0 start-0 lg:z-20">
				<p>
					Shawarma <br className="md:hidden" />
					Your Way
				</p>
				<p className="italic text-xs hidden md:block w-80 my-8 font-normal">
					"culinary masterpiece, bursting with flavors that transport your taste
					buds. Each bite is a journey of delight, making it the ultimate go-to
					for shawarma enthusiasts!"
				</p>

				<div className="flex items-start flex-col mt-5">
					<div className="flex">
						<Rating rating={rating} reviews={reviews} />
					</div>
				</div>
			</div>
			<div className="hidden lg:block bg-hero h-[425px] lg:w-[707px] xl:w-[640px] justify-center absolute top-0 right-0"></div>
			<div className="hidden xl:block bg-hero h-[425px] w-[640px] justify-center absolute top-0 right-[640px] z-10"></div>

			<div className="w-full lg:flex-row mt-60 sm:mt-[425px] lg:mt-[340px] z-30 flex flex-col space-x-0 lg:justify-between">
				<LocationRow />
				<SearchBar placeholder="Search for Shawarma..." />
			</div>
			<div className="mt-8">
				<h2 className="flex text-2xl font-bold mb-4 items-center justify-start">
					Categories
				</h2>
				<p className="text-start text-xs sm:text-sm mb-4 opacity-80 font-medium italic">
					Explore a variety of mouth-watering shawarmas in different categories.
				</p>
				<div className="justify-center items-center py-2 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-[8.5rem] mt-4 max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll hide-scroll-bar">
					{categories.map((category) => (
						<CategoryCard key={category.id} category={category} />
					))}
				</div>
			</div>

			<div className="flex flex-col mt-8">
				<h2 className="flex text-2xl font-bold mb-4 items-center justify-start">
					Featured Shawarmas
				</h2>
				<p className="text-start text-xs m:text-sm opacity-80 mb-4 font-medium italic">
					Indulge in our signature shawarmas, carefully crafted for a delightful
					experience.
				</p>
				<div className="flex items-center justify-center space-x-2 py-1 max-w-sm sm:max-w-[640px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-scroll hide-scroll-bar">
					{featuredShawarmas.map((shawarma) => (
						<div
							key={shawarma.id}
							className="inline-block py-2 px-0.5 h-64 hover:animate-pulse"
						>
							{/* Added 'animate-bounce' for subtle bouncing animation */}
							<ShawarmaCard shawarma={shawarma} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
