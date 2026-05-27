import { KEY_QUOTE } from "../constants";

function Quote() {
  return (
    <div
      className=" flex items-center gap-5 px-6 lg:px-20 border-t border-[rgba(47,138,201,0.15)]"
      style={{
        background: "rgba(0,0,0)",
        backdropFilter: "blur(10px)",
        paddingTop: "14px",
        paddingBottom: "14px",
      }}
    >
      <span className="w-10 h-px bg-[#2F8AC9] flex-shrink-0" />

      <p className="font-display italic text-[16px] lg:text-[15px] leading-[1.5] text-[rgb(255,254,255)] flex-1">
        {KEY_QUOTE}
      </p>

      <span className="hidden lg:block font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#2F8AC9] border border-[rgba(47,138,201,0.3)] px-4 py-[6px] rounded-sm flex-shrink-0">
        Flux Aid Initiative
      </span>
    </div>
  );
}

export default Quote;
