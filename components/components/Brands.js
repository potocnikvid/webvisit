import Image from "next/image";

export default function Brands() {
    return (
        <div id="brands" className="mx-auto mt-12 max-w-7xl space-y-8 py-6">
            <div className="flex justify-center">
                <h2 className="text-2xl">NINE4 brings an invaluable experience to these brands</h2>
            </div>
            <div className="mx-auto flex max-w-7xl flex-row justify-start space-x-12 overflow-auto rounded-xl bg-[#332b54] px-3 lg:justify-center lg:space-x-16 xl:space-x-24">
                <Image src="/svgs/google.svg" alt="google" width="132" height="92" />
                <Image src="/svgs/google.svg" alt="google" width="132" height="92" />
                <Image src="/svgs/google.svg" alt="google" width="132" height="92" />
                <Image src="/svgs/google.svg" alt="google" width="132" height="92" />
            </div>
        </div>
    );
}
