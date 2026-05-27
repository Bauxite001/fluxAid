// // ImpactBar.jsx

// import { IMPACT_STATS } from "../constants";

// const ImpactBar = () => {
//   return (
//     <div className="bg-[#1E1E1E] border-b border-white/[0.07] relative">
//       {/* Top gradient rule */}
//       <div
//         className="absolute top-0 left-0 right-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(255,255,255,0.11), transparent)",
//         }}
//       />

//       <div className="grid grid-cols-2 lg:grid-cols-4">
//         {IMPACT_STATS.map((stat, i, arr) => (
//           <div
//             key={stat.label}
//             className={`
//               flex flex-col items-center justify-center text-center
//               py-8 px-6
//               ${i < arr.length - 1 ? "border-r border-white/[0.07]" : ""}
//               ${i < 2 ? "border-b lg:border-b-0 border-white/[0.07]" : ""}
//             `}
//           >
//             <div className="font-display font-bold text-[#F5F5F5] text-[28px] lg:text-[44px] leading-none mb-2">
//               {stat.value}
//             </div>
//             <div className="font-condensed font-semibold uppercase text-[9px] lg:text-[10px] tracking-[2px] text-[#9A9A9A]">
//               {stat.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImpactBar;
