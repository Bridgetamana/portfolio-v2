export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 100 100" className="text-white">
        <g fill="currentColor">
          <path d="M20 15H55C65 15 70 22 70 30C70 38 65 42 60 43.5C67 45 72 50 72 58C72 68 65 75 55 75H20V65H30V25H20V15Z" />
          <path
            d="M30 25V65H55C60 65 62 61 62 58C62 55 60 50 50 50H40V40H50C58 40 60 35 60 30C60 25 58 25 55 25H30Z"
            fill="black"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M75 15H95V25H90L75 75H65L50 25H45V15H65V25H60L70 60L80 25H75V15Z" />
          <path
            d="M58 45H82"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}
