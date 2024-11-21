import { useEffect, useState } from "react";

type MoreInformationsModalProps = {
  quizTopic: string;
  content: string;
  closeMoreInformationsModal: () => void;
};

export default function MoreInformationsModal({
  content,
  quizTopic,
  closeMoreInformationsModal,
}: MoreInformationsModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);

    setTimeout(() => {
      closeMoreInformationsModal();
    }, 300);
  };

  return (
    <>
      <div
        className={`fixed inset-0 h-screen w-full bg-black/50 z-[1] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`absolute top-1/2 -translate-y-1/2 bg-white z-10 w-1/2 p-12 max-h-[500px] overflow-y-auto transition-transform duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-[var(--primary-color)] text-center font-bold text-3xl mb-8">
          More informations about: {quizTopic}
        </h2>
        <p className="text-[var(--primary-color)] text-start leading-relaxed tracking-wider">
          {content}
        </p>
        <button
          className="text-green-500 absolute top-2 right-2 text-3xl hover:scale-110"
          onClick={handleClose}
        >
          X
        </button>
      </div>
    </>
  );
}
