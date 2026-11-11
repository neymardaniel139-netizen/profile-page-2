export default function App() {
  return (
    <div className="profileCard">
      {/* <img src="/download.jfif" alt="download" /> */}
      <div className="profiletext">
        <div className="profileheader">
          <h2>Rimuru Tempest</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="green"
            stroke="black"
            stroke-width="white"
            stroke-linecap=""
            stroke-linejoin=""
            class="lucide lucide-badge-check preview-icon"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m16 9-5.5 5.5L8 12" />
          </svg>
        </div>
        <p>
          Product designer who focuses <br /> on simplicity & usability,{" "}
        </p>
        <div className="profiledets">
          <div className="profilespan">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round preview-icon"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            312
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-square-check preview-icon"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m16 9-5.5 5.5L8 12" />
            </svg>
            48
          </span>
          </div>
          <button>Follow +</button>
        </div>
      </div>
    </div>
  );
}
