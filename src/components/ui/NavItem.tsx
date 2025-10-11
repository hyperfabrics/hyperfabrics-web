"use client";

interface NavItemProps {
  label: string;
  isActive: boolean;
}

export const NavItem = ({ label, isActive }: NavItemProps) => {
  return (
    <div
      className="relative h-full flex items-center"
      style={{ cursor: "pointer" }}
    >
      <div className="flex items-center gap-2 h-full px-4 text-base font-medium transition-colors duration-300">
        <span
          style={{
            color: isActive ? "var(--accent)" : "var(--text-secondary)",
          }}
        >
          {label}
        </span>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 ease-out origin-center ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          backgroundColor: "var(--accent)",
        }}
      />
    </div>
  );
};
