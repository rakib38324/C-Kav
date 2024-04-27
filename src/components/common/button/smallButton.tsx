import { TButton } from "./bigButton";

const SmallButton: React.FC<TButton> = ({text, BColor}) => {
    return (
        <div>
            <button className={`text-sm text-center border border-red-600 font-semibold font-[#Roboto] bg-${BColor} px-[25px] py-[10px] rounded-lg`}>
                {text}
            </button>
        </div>
    );
};

export default SmallButton;