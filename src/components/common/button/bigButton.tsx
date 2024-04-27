export type TButton = {
    text: string;
    BColor: string
}

const SmallButton: React.FC<TButton> = ({text, BColor}) => {
    return (
        <div>
            <button className={`text-lg font-semibold font-[#Roboto] bg-${BColor} px-[35px] py-[18px] rounded-lg`}>
                {text}
            </button>
        </div>
    );
};

export default SmallButton;