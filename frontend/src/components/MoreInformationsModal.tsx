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
  return (
    <>
      <div
        className="fixed inset-0 h-screen w-full bg-black/50 z-[1]"
        onClick={closeMoreInformationsModal}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 bg-white z-10 w-1/2 p-12 max-h-[500px] overflow-y-auto">
        <h2 className="text-[var(--primary-color)] text-center font-bold text-3xl mb-8">
          More informations about: {quizTopic}
        </h2>
        <p className="text-[var(--primary-color)] text-start leading-relaxed tracking-wider">
          {content}
        </p>
        <button
          className="text-green-500 absolute top-2 right-2 text-3xl hover:scale-110"
          onClick={closeMoreInformationsModal}
        >
          X
        </button>
      </div>
    </>
  );
}
