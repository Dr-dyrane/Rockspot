// A new component for rendering the options modal
import React from "react";
import {
	PiPepperFill,
	PiToggleRightFill,
	PiCirclesThreeFill,
	PiCaretUpFill,
	PiCaretDownFill,
} from "react-icons/pi";

const OptionsModal = ({
	modifiedOptions,
	setModifiedOptions,
	handleSaveOptions,
	handleToggleOptions,
	handleQuantityChange,
}) => {
	const handleIncreaseQuantity = () => {
		const newQuantity = Math.min(modifiedOptions.quantity + 1, 10);
		handleQuantityChange(newQuantity);
	};

	const handleDecreaseQuantity = () => {
		const newQuantity = Math.max(modifiedOptions.quantity - 1, 1);
		handleQuantityChange(newQuantity);
	};
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
			<div className="bg-gray-200 p-6 rounded-xl relative space-y-2">
				{/* ... (option form fields) */}
				<div>
					<label className="flex text-indigo-700 text-md font-bold mb-2 flex-row items-center ">
						<span>
							<PiPepperFill color="red" className="mr-2" />
						</span>
						Spiciness
					</label>
					<select
						className="w-full p-2 border rounded-xl text-sm italic"
						value={modifiedOptions.spiciness}
						onChange={(e) =>
							setModifiedOptions({
								...modifiedOptions,
								spiciness: e.target.value,
							})
						}
					>
						<option value="less">Less</option>
						<option value="normal">Normal</option>
						<option value="extra">Extra</option>
						{/* Add more options as needed */}
					</select>
				</div>

				<div>
					{/* Quantity field with increase and decrease buttons */}
					<label className="flex text-indigo-700 text-md font-bold mb-2 flex-row items-center">
						<span>
							<PiCirclesThreeFill color="" className="mr-2" />
						</span>
						Quantity
					</label>
					<div className="flex items-center">
						<input
							type="number"
							className="w-full p-2 border rounded-xl text-sm italic pl-4"
							value={modifiedOptions.quantity}
							onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
						/>

						<div className="ml-2 text-sm">
							<button className="" onClick={handleIncreaseQuantity}>
								<PiCaretUpFill />
							</button>
							<button className="" onClick={handleDecreaseQuantity}>
								<PiCaretDownFill />
							</button>
						</div>
					</div>
				</div>

				{/* Repeat similar logic for other options */}
				{/* ... (customize the form fields) */}
				<div className="flex flex-row space-x-2">
					<button
						className="mt-4 bg-rose-600 text-white py-1.5 px-4 rounded-lg w-full"
						onClick={handleToggleOptions}
					>
						Close
					</button>
					<button
						className="mt-4 bg-indigo-600 text-white py-1.5 px-4 rounded-lg w-full"
						onClick={handleSaveOptions}
					>
						Save
					</button>
				</div>

				<button
					className="absolute top-2 right-2"
					onClick={handleToggleOptions}
				>
					<PiToggleRightFill size={36} color="red" />
				</button>
			</div>
		</div>
	);
};

export default OptionsModal;
