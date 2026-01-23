type ToggleProps = {
  on: boolean;
  setOn: (value: boolean) => void;
};
const Toggle = ({ on, setOn }: ToggleProps) => {
  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer
        transition-colors duration-300
        ${on ? "bg-blue-500/30" : "bg-gray-500"}
      `}
    >
      <div
        className={`w-6 h-6  rounded-full
          transition-transform duration-300
          ${on ? "translate-x-5 bg-blue-400" : "-translate-x-2 bg-gray-300"}
        `}
      />
    </button>
  );
};

export default Toggle;
