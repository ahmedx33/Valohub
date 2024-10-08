import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function Spinner() {
    return (
        <div className="flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin text-white text-4xl" />
        </div>
    );
}
