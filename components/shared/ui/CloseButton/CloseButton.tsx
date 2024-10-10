interface ICloseButtonProps {
  size?: "sm" | "md" | "lg";
}

export const CloseButton = ({ size }: ICloseButtonProps) => {
  return (
    <div className={size === "sm" ? "size-5" : size === "md" ? "size-8" : size === "lg" ? "size-10" : "size-5"}>
      <span className="block w-full h-1 bg-black hover:bg-rose-500 rotate-45 rounded-sm"></span>
      <span className="block w-full h-1 bg-black hover:bg-rose-500 -rotate-45 rounded-sm"></span>
    </div>
  );
};
