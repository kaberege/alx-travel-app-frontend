import type { PillProps } from "@/interfaces";
import Image from "next/image";

const Pill: React.FC<PillProps> = ({ icon, label, alt, styles, offer }) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center gap-0.5 rounded-full border-[1px] border-neutral-300 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 ${styles}`}
    >
      {icon && alt && <Image src={icon} width={13} height={13} alt={alt} />}
      <div className="flex items-center justify-center gap-1">
        {offer && <span className="text-zinc-900">{offer}</span>}
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Pill;
