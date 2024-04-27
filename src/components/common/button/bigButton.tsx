export type TButton = {
    text: string;
    BColor: string;
    TColor: string
}

const BigButton: React.FC<TButton> = ({text, BColor, TColor}) => {
    return (
        <div>
            <button className={`text-lg font-semibold font-[#Roboto] text-${TColor} bg-${BColor} px-[35px] py-[18px] rounded-lg`}>
                {text}
            </button>
        </div>
    );
};

export default BigButton;