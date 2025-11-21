import type { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title, children, style }) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center gap-0.5 rounded-full border border-neutral-300 px-2 py-1 transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-600 hover:shadow-sm hover:shadow-teal-600 ${style}`}
    >
      {/* {icon && alt && <Image src={icon} width={13} height={13} alt={alt} />}
      </div> */}
      {title && <span>{title}</span>}
      {children}
    </div>
  );
};

export default Pill;
