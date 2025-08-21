const QuantityControls = ({ className, quantity, setQuantity }) => {
	const onAddQuantity = () => {
		if (quantity >= 999) return;
		setQuantity(Math.min(quantity + 1));
	};

	const onSubstractQuantity = () => {
		setQuantity(Math.max(1, quantity - 1));
	};

	const onInputChange = (event) => {
		const newQuantity = event.target.value;
		if (newQuantity > 999) return setQuantity(999);
		if (newQuantity < 1) return setQuantity(1);
		setQuantity(Math.floor(newQuantity));
	};

	return (
		<div
			className={"flex gap-1 *:transition-all duration-150 " + className}
		>
			<button
				className="p-1.5 rounded-full bg-accent/10 border border-accent active:bg-accent"
				onClick={onSubstractQuantity}
			>
				-
			</button>
			<input
				className="px-2 py-1 w-4/5 focus:border-2 focus:bg-accent/10 border-accent outline-0 rounded-lg text-center"
				type="number"
				onChange={onInputChange}
				value={quantity}
			/>
			<button
				className="p-1.5 rounded-full bg-accent/10 border border-accent active:bg-accent"
				onClick={onAddQuantity}
			>
				+
			</button>
		</div>
	);
};

export default QuantityControls;
