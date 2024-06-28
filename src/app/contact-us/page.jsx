import Image from "next/image";
import map from "@/app/assets/image/map.svg";
import cell from "@/app/assets/image/cell.svg";
import mail from "@/app/assets/image/mail.svg";

const Contact = () => {
    return (
        <div className="bg-background">
            <h1 className="text-white text-[4rem] leading-[4rem] font-semibold flex justify-center p-12">Contact Us</h1>
            <div className="flex px-6 px-8 py-12 border border-black">
                <div>
                    <h1 className="font-semibold text-white text-[2rem]">Florianópolis, Brazil</h1>
                    <p className="font-medium text-white text-[1rem]">ACATE | Centro de Inovação</p>
                    <p className="font-medium text-white text-[1rem]">Rodovia SC 401, 4100 - Km4 - Saco Grande, Florianópolis - SC, 88032-005</p>
                </div>
                <div className="w-full">
                    <div className="flex justify-end">
                        <a href="https://maps.app.goo.gl/KiC7RmGzAuHs5YGf6" target="_blank" rel="noopener noreferrer">
                            <Image className="w-[260px] h-[64px]" src={map} alt="map" />
                        </a>
                        <a href="https://wa.me/5548991053071" target="_blank" rel="noopener noreferrer">
                            <Image className="w-[260px] h-[64px]" src={cell} alt="WhatsApp" />
                        </a>
                        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                            <Image className="w-[260px] h-[64px]" src={mail} alt="Email" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
