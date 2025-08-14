type Props = {
	caption?: string;
	checked: boolean;
	onChange: (value: boolean) => void;
	disabled?: boolean;
};

export default function Switch ({ caption, onChange, checked, disabled = false }: Props) {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				value=""
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				className="sr-only peer"
				disabled={disabled}
			/>
			<div className={`
				relative w-11 h-6 rounded-full
				bg-linear-65
				from-amber-400 to-amber-600
				peer-checked:from-indigo-600 peer-checked:to-indigo-800

				after:content-[''] after:absolute after:top-[4px] after:start-[6px]
				after:h-4 after:w-4 after:rounded-full
				after:bg-[var(--bg)]
				after:transition-all
				peer-checked:after:translate-x-full
				rtl:peer-checked:after:-translate-x-full`
			}>
			</div>
			{caption && 
				<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					{caption}
				</span>
			}
		</label>
	);
}