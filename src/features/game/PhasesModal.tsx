import React from "react";

const phases = [
  "Phase 1: 2 sets of 3",
  "Phase 2: 1 set of 3 + 1 run of 4",
  "Phase 3: 1 set of 4 + 1 run of 4",
  "Phase 4: 1 run of 7",
  "Phase 5: 1 run of 8",
  "Phase 6: 1 run of 9",
  "Phase 7: 2 sets of 4",
  "Phase 8: 7 cards of one color",
  "Phase 9: 1 set of 5 + 1 set of 2",
  "Phase 10: 1 set of 5 + 1 set of 3",
];

type PhasesModalProps = { open: boolean; onClose: () => void };

const PhasesModal = ({ open, onClose }: PhasesModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="bg-blue-100 rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-700">Game Phases</h2>
          <button
            onClick={onClose}
            className="text-blue-500 hover:text-blue-700 text-xl font-bold hover:cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <ul className="list-inside space-y-2 text-blue-600">
          {phases.map((phase, idx) => (
            <li key={idx} className="font-medium">
              {phase}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhasesModal;
